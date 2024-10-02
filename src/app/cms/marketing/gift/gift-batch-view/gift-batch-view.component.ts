import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from '@antv/g2';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ExportGiftBatchToCsvGQL,
  GiftCodeListQuery,
  ViewGiftBatchQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { TagColorService } from '@ridy/admin-panel/src/app/@services/tag-color/tag-color.service';
import { castTo } from '@ridy/admin-panel/src/app/@services/type-caster';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-gift-batch-view',
  templateUrl: './gift-batch-view.component.html',
  styles: ['nz-input-number{ @apply w-full }'],
})
export class GiftBatchViewComponent implements OnInit {
  $viewGiftCaster = castTo<ApolloQueryResult<ViewGiftBatchQuery>>();
  $giftListCaster = castTo<ApolloQueryResult<GiftCodeListQuery>>();
  private usageChart!: Chart;

  constructor(
    public route: ActivatedRoute,
    private message: NzMessageService,
    public tableService: TableService,
    public tagColor: TagColorService,
    private exportGql: ExportGiftBatchToCsvGQL,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  onChartPayoutMethodsInit(chartInstance: Chart) {
    this.usageChart = chartInstance;
    this.route.data?.subscribe((result) => {
      const stats: ApolloQueryResult<ViewGiftBatchQuery> = result.giftBatch;
      const mappedStats = [
        {
          name: 'Used',
          count: stats.data?.giftBatch.totalUsed[0].count?.id ?? 0,
        },
        {
          name: 'Unused',
          count: stats.data?.giftBatch.totalUnused[0].count?.id ?? 0,
        },
      ];
      this.usageChart
        .data(mappedStats)
        .interval()
        .position('count')
        .color('name')
        .adjust('stack');
      this.usageChart.coordinate('rect').transpose();
      this.usageChart.render();
    });
  }

  async exportToCsv() {
    try {
      const url = await firstValueFrom(
        this.exportGql.mutate({ giftBatchId: this.route.snapshot.params.id }),
      );
      this.tableService.downloadURI(
        environment.root + url.data?.exportGiftCardBatch,
        `export-${new Date().getTime()}.csv`,
      );
    } catch (error) {
      this.message.error('Export failed');
    }
  }
}
