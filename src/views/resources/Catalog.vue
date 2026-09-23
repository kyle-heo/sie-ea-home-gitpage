<template>
  <PageHeader title="카탈로그" description="SIE Analyzer System 온라인 카탈로그" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CATALOG</h2>
          <p class="section-description">주요 System별 상세 사양과 구성 정보를 확인할 수 있습니다.</p>
        </div>

        <div class="row">
          <div v-for="item in catalogs" :key="item.title" class="col-lg-4 col-md-6 col-12 mb-4">
            <router-link :to="item.to" class="catalog-link">
              <div class="card catalog-card h-100">
                <div class="card-body">
                  <div class="catalog-index">{{ item.index }}</div>
                  <h4 class="card-title">{{ item.title }}</h4>
                  <p class="card-description">{{ item.description }}</p>
                  <span class="detail-link">View details →</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'

const catalogs = [
  { index: '01', title: 'Process Analyzer System', description: 'Analyzer House, SCS, HVAC, Gas Detection, Sample Line 및 Software/Hardware 구성', to: '/business/process-analyzer' },
  { index: '02', title: 'CEMS', description: 'Continuous Emission Monitoring System 구성 및 Data Logger / FEP', to: '/business/cems' },
  { index: '03', title: 'Utility / Liquid Analyzer System', description: 'Utility 수질 분석 Application 및 System Configuration', to: '/business/utility-analyzer' },
  { index: '04', title: 'Gas Analyzer System', description: 'Semiconductor Industry용 UHP Gas Analyzer System', to: '/business/gas-analyzer' },
  { index: '05', title: 'SWAS', description: 'Steam & Water Analysis System 구성 및 주요 장비', to: '/business/swas' },
  { index: '06', title: 'Closed Loop Sample System', description: 'Gas / Liquid Sampler 및 Accessories', to: '/business/closed-loop' }
]
</script>

<style scoped>
.section-header { text-align: center; padding: 40px 0; }
.section-title { font-size: 2.2rem; font-weight: 600; color: #333; margin-bottom: 15px; }
.section-description { font-size: 1.2rem; color: #666; margin-bottom: 40px; }
.catalog-link { color: inherit; text-decoration: none; display: block; height: 100%; }
.catalog-card { height: 100%; transition: transform .2s ease, box-shadow .2s ease; border: 1px solid #e4e7eb; }
.catalog-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,.1); }
.catalog-index { color: #007bff; font-weight: 700; font-size: 1.1rem; margin-bottom: 12px; }
.detail-link { display: inline-block; margin-top: 12px; color: #007bff; font-weight: 600; }
</style>
