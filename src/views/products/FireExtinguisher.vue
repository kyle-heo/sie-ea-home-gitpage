<template>
  <PageHeader :title="pageTitle" :description="pageDescription" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ pageTitle }}</h2>
          <p class="section-description">{{ pageDescription }}</p>
        </div>

        <div class="row">
          <div v-for="vendor in vendors" :key="vendor.name" class="col-lg-6 col-md-6 col-12 mb-4">
            <div class="card vendor-card h-100">
              <div class="card-body">
                <div class="vendor-name">{{ vendor.name }}</div>
                <h4 class="card-title">{{ vendor.category }}</h4>
                <p class="card-description item-text">{{ vendor.items }}</p>
                <a
                  :href="vendor.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="vendor-link"
                >
                  {{ vendor.website }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'

const pageTitle = "Fire Extinguisher"
const pageDescription = "A/C Type Fire Extinguisher"
const vendors = [
  {
    "name": "TJT Plus",
    "category": "Fire Extinguisher",
    "items": "A/C Type Fire Extinguisher",
    "website": "https://www.tjtplus.net"
  }
]
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

.vendor-card {
  height: 100%;
  border: 1px solid #e4e7eb;
}

.vendor-name {
  color: #0068d9;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.item-text {
  white-space: pre-line;
  line-height: 1.7;
  min-height: 54px;
}

.vendor-link {
  display: inline-block;
  margin-top: 14px;
  word-break: break-all;
  font-weight: 600;
}
</style>
