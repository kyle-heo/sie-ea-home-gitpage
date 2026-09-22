<template>
  <PageHeader />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="section-header">
            <h2 class="section-title">조직도</h2>
            <p class="section-description">
              서로 존중하며 모든 관계와 업무에 있어서 진실하고 성실하게<br />
              절실한 마음으로 정성스러운 서비스를 제공하는 기업입니다.
            </p>
          </div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="organization-chart-image-container">
                  <img
                    :src="$asset('assets/img/sieea/company/organization.png')"
                    alt="Organization Chart"
                    class="img-fluid"
                  />
                </div>
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
