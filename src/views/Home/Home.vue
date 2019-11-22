<template>
  <div class="page">
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="grid-content">
          <i class="icon-grid-content el-icon-light-rain"></i>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <i class="icon-grid-content el-icon-lightning"></i>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <i class="icon-grid-content el-icon-heavy-rain"></i>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <i class="icon-grid-content el-icon-sunrise"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .grid-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 108px;
    cursor: pointer;
    font-size: $extraLarge;
    position: relative;
    overflow: hidden;
    color: $mainTextColor;
    background: $white;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.09);
    border-color: rgba(0, 0, 0, 0.05);
  }
  .icon-grid-content {
    margin: 0 20px;
    padding: 20px;
    color: #000;
    border-radius: 5px;
    &:hover {
      transition: opacity 0.5s;
      color: #fff;
      background: #000;
    }
  }
}
</style>
