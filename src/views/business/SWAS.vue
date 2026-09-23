<template>
  <PageHeader :title="pageTitle" :description="pageDescription" />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ pageTitle }}</h2>
          <p class="section-description">{{ pageDescription }}</p>
        </div>

        <div class="sub-menu">
          <button
            v-for="item in tabs"
            :key="item.title"
            class="sub-menu-button"
            :class="{ active: activeTab.title === item.title }"
            @click="activeTab = item"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="card">
          <div v-if="activeTab.images && activeTab.images.length" class="card-header card-header-image">
            <div class="image-grid">
              <div v-for="image in activeTab.images" :key="image" class="image-item">
                <img :src="$asset(image)" :alt="activeTab.title" />
              </div>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ activeTab.title }}</h4>
            <p class="card-description content-text">{{ activeTab.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const pageTitle = "SWAS"
const pageDescription = "Steam & Water Analysis System"
const tabs = [
  {
    "title": "Configuration",
    "content": "SWAS (Steam & Water Analysis System)는 Steam Turbine을 사용하는 발전소에서 Boiler Feed Water 및 Steam을 분석하는 시스템입니다.\n\nSteam Turbine, Super Heater, Condenser, Steam Boiler, Pump, Piping 등의 발전 설비에 고형물 침식이나 부식을 일으킬 수 있는 불순물 농도를 측정하고 순도를 보장하여 발전소 효율을 유지하기 위한 통합 관리 모니터링 시스템입니다.\n\nConfiguration\n- Analyzer (pH, Cation / Specific Conductivity, DO, Sodium, Silica, ETC.)\n- Analyzer Panel\n- Control Panel\n- Hot-well Sample Pump & Skid\n- Chiller Unit\n- Electrical Equipment (PDB, Junction Boxes, Lighting fixtures, ETC.)\n- Utility Headers (I/A, Drain, Cooling Water)",
    "images": [
      "/assets/img/sieea/business/SampleConditioningSystem2.jpg"
    ]
  },
  {
    "title": "Chiller Unit",
    "content": "고온 증기의 냉각을 위해 일반적으로 1차 냉각은 Plant Cooling Water를 사용합니다.\n\n제한된 현장 조건으로 인해 Analyzer Sensor 및 SCS Parts의 Operation Temperature 이하로 냉각할 수 없는 경우, 2차로 Chilled Water를 이용하여 운전 온도 이하로 냉각합니다.\n\n이를 통해 Sensor 및 SCS Parts가 고온으로 인해 Damage가 발생하지 않도록 보호합니다.",
    "images": []
  },
  {
    "title": "Sample Conditioning System",
    "content": "Analyzer가 안정적으로 측정할 수 있도록 Sample Filtration, Temperature Control, Pressure Control, Sample Flow Control 등을 제공하는 System입니다.\n\n- Thermal Shut Off Valves\n- Pressure Reducing Valve\n- Solenoid Valve\n- Primary Sample Cooler\n- Secondary Sample Cooler\n- Back Pressure Regulator\n- Flowmeter\n- ETC.",
    "images": [
      "/assets/img/sieea/business/SampleConditioningSystem1.jpg",
      "/assets/img/sieea/business/SampleConditioningSystem3.jpg"
    ]
  },
  {
    "title": "Hotwell Sample Pump & Skid",
    "content": "Hotwell Sample Pump는 증기 시스템에서 생성된 응축수를 펌핑하는 펌프입니다.",
    "images": []
  },
  {
    "title": "Control Panel",
    "content": "Control Panel\n\n- Annunciator\n- PLC\n- Recorder\n- Power Signal\n- Communication",
    "images": [
      "/assets/img/sieea/business/software_hardware.png"
    ]
  }
]
const activeTab = ref(tabs[0])
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

.sub-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.sub-menu-button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #fff;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sub-menu-button:hover {
  background: #f3f5f7;
}

.sub-menu-button.active {
  color: #fff;
  background: #007bff;
  border-color: #007bff;
}

.card-header-image {
  padding: 18px;
  background: #fff;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.image-item {
  min-height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  max-height: 320px;
  object-fit: contain;
}

.content-text {
  white-space: pre-line;
  line-height: 1.85;
}
</style>
