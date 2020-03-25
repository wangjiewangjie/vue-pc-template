<template>
  <div class="page">
    <el-table :data="tableData" stripe :default-sort="{ prop: 'totalPrice', order: 'ascending' }">
      <el-table-column label="机箱">
        <template slot-scope="prop">
          {{ prop.row.mainframeBox }}
          <span class="item-table-column" v-if="prop.row.mainframeBoxPrice">/￥{{ prop.row.mainframeBoxPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CPU">
        <template slot-scope="prop">
          {{ prop.row.CPU }}
          <span class="item-table-column" v-if="prop.row.CPUPrice">/￥{{ prop.row.CPUPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="motherBoard" label="主板">
        <template slot-scope="prop">
          {{ prop.row.motherBoard }}
          <span class="item-table-column" v-if="prop.row.motherBoardPrice">/￥{{ prop.row.motherBoardPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="memory" label="内存">
        <template slot-scope="prop">
          {{ prop.row.memory }}
          <span class="item-table-column" v-if="prop.row.memoryPrice">/￥{{ prop.row.memoryPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="SSD" label="固态硬盘">
        <template slot-scope="prop">
          {{ prop.row.SSD }}
          <span class="item-table-column" v-if="prop.row.SSDPrice">/￥{{ prop.row.SSDPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="总价" width="100" sortable>
        <template slot-scope="prop">{{ totalPrice(prop) }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          mainframeBox: "佑泽M1（300W电源）",
          mainframeBoxPrice: 464,
          CPU: "AMD R3-2200G",
          CPUPrice: 599,
          motherBoard: "微星B450M PRO-M2",
          motherBoardPrice: 410,
          memory: "威刚8G-2666 x2",
          memoryPrice: 199,
          SSD: "西数 WD480G M2绿盘",
          SSDPrice: 359
        },
        {
          mainframeBox: "迎广肖邦（150W电源）",
          mainframeBoxPrice: 499,
          CPU: "AMD R3-2200G",
          CPUPrice: 599,
          motherBoard: "华擎A320TM-ITX",
          motherBoardPrice: 559,
          memory: "威刚8G-2666 x2",
          memoryPrice: 199,
          SSD: "西数 WD480G M2绿盘",
          SSDPrice: 359
        },
        {
          mainframeBox: "酷鱼S3（300W电源）",
          mainframeBoxPrice: 399,
          CPU: "AMD R3-2200G",
          CPUPrice: 599,
          motherBoard: "华擎A320TM-ITX",
          motherBoardPrice: 559,
          memory: "威刚8G-2666 x2",
          memoryPrice: 199,
          SSD: "西数 WD480G M2绿盘",
          SSDPrice: 359
        }
      ]
    };
  },
  methods: {
    totalPrice(prop) {
      return (
        "￥" +
        (prop.row.mainframeBoxPrice +
          prop.row.CPUPrice +
          prop.row.motherBoardPrice +
          prop.row.memoryPrice +
          prop.row.SSDPrice)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.item-table-column {
  font-size: $extraSmall;
  color: $placeholderTextColor;
}
</style>
