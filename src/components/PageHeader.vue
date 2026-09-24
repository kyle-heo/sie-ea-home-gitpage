<template>
  <div
    class="page-header page-header-xms"
    data-parallax="true"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="filter"></div>
    <div class="container"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getAssetUrl } from '@/utils/asset'

const route = useRoute()

const imageUrl = computed(() => {
  const path = route.path
  if (path.startsWith('/about')) {
    return getAssetUrl('assets/img/sieea/company/company-background.jpg')
  } else if (path.startsWith('/business')) {
    return getAssetUrl('assets/img/sieea/si-business-1.webp')
  } else if (path.startsWith('/products')) {
    return getAssetUrl('assets/img/sieea/products-1.webp')
  } else if (path.startsWith('/resources')) {
    return getAssetUrl('assets/img/sieea/dataroom-1.webp')
  } else if (path.startsWith('/customer-support')) {
    return getAssetUrl('assets/img/sieea/customer-center-1.webp')
  }
  return getAssetUrl('assets/img/header.jpg')
})
</script>

<style scoped>
@media (max-width: 991.8px) {
  .page-header {
    display: flex;
    align-items: center;
    min-height: 20vh !important;
  }
}
</style>
