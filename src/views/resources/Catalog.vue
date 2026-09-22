<template>
  <PageHeader
    title="카탈로그"
    description="제품 카탈로그와 기술 자료를 다운로드하실 수 있습니다."
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CATALOG</h2>
          <p class="section-description">제품 카탈로그와 기술 자료를 다운로드하실 수 있습니다.</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">제품 카탈로그</h4>
                <p class="card-description">
                  SIE-EA의 제품 카탈로그와 기술 자료를 다운로드하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

onMounted(() => {
  // 페이지 로드 시 필요한 초기화 작업
})
</script>

<style scoped>
.section-header {
  text-align: center;
  padding: 40px 0;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}
</style>
