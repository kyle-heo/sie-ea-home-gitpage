<template>
  <PageHeader
    title="CEMS"
    description="Continuous Emission Monitoring System - 연속 배출가스 모니터링 시스템"
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CEMS</h2>
          <p class="section-description">
            Continuous Emission Monitoring System - 연속 배출가스 모니터링 시스템
          </p>
        </div>

        <div class="sub-menu">
          <button
            v-for="item in menuItems"
            :key="item.title"
            @click="activeMenuItem = item"
            :class="{ active: activeMenuItem.title === item.title }"
            class="sub-menu-button"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="content-area">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-image" v-if="activeMenuItem.images && activeMenuItem.images.length > 0">
                  <div class="image-grid">
                    <div class="image-item" v-for="image in activeMenuItem.images" :key="image">
                      <img :src="$asset(image)" :alt="activeMenuItem.title" />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{{ activeMenuItem.title }}</h4>
                  <p class="card-description" style="white-space: pre-line;">{{ activeMenuItem.content_kr }}</p>
                  <hr>
                  <p class="card-description" style="white-space: pre-line;">{{ activeMenuItem.content_en }}</p>
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
import { ref, onMounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const menuItems = [
  {
    title: 'CEMS Configuration',
    content_kr: `CEMS (Continuous Emission Monitoring Systems)는 연속 배출 모니터링 시스템으로 발전소, 소각장, 산업 보일러 등 산업 현장 굴뚝에서 배출되는 대기 오염의 위험이 있는 배출 가스 측정과
배출량을 실시간으로 감시 및 관리하는 시스템입니다. 대기오염 배출가스는 각 나라의 환경규제법이나 U.S EPA 40 CFR Part 60, 63 & 75 등의 대기오염 방지법에 관한 법률에 따라 대기 오염 
배출가스의 농도와 배출량을 측정하고 측정된 Data의 정보를 지속적으로 수집 및 기록하며, 관리 감시센터로 전송하여 규제 요구 사항을 충족 시키도록 감시 및 제어하여 대기 환경 개선을 위한
시스템입니다.

Continuous Emission Monitoring System Consist of ;
   - Analyzer (SOx, NOx, NOx Converter, CO, CO2, O2, Dust, Opacity, Flow/Temp., Particulate Matter, Opacity, ETC.)
   - CEMS Cabinet & Shelter
   - Data Logger & FEP
   - Communication Unit (PLC, Modem, Switch Hub, Router, Converter)
   - Sample Probe, Sample Line (Electric Heating)
   - Sample Conditioning System & Calibration System
   - Electrical Equipment (PDB, Junction Boxes, Lighting, ETC.)
   - Utility Headers (I/A, Drain)
   - Software & Hardware  (DAS, Integrated Control System)`,
    content_en: `CEMS (Continuous Emission Monitoring Systems) is a system that measures and manages the emission of air pollutants from industrial stacks such as power plants, incinerators, and industrial boilers in real time. According to the air pollution control laws such as the environmental regulations of each country or U.S EPA 40 CFR Part 60, 63 & 75, the concentration and emission of air pollutants are measured, and the measured data is continuously collected and recorded, and transmitted to the management monitoring center to meet regulatory requirements. It is a system for improving the atmospheric environment by monitoring and controlling.

Continuous Emission Monitoring System Consist of ;
   - Analyzer (SOx, NOx, NOx Converter, CO, CO2, O2, Dust, Opacity, Flow/Temp., Particulate Matter, Opacity, ETC.)
   - CEMS Cabinet & Shelter
   - Data Logger & FEP
   - Communication Unit (PLC, Modem, Switch Hub, Router, Converter)
   - Sample Probe, Sample Line (Electric Heating)
   - Sample Conditioning System & Calibration System
   - Electrical Equipment (PDB, Junction Boxes, Lighting, ETC.)
   - Utility Headers (I/A, Drain)
   - Software & Hardware  (DAS, Integrated Control System)`,
    images: [
      '/assets/img/sieea/business/CEMS1.png',
      '/assets/img/sieea/business/CEMSConfiguration.png'
    ]
  },
  {
    title: 'Data Logger / FEP',
    content_kr: `[Data Logger]
측정기에서 측정된 자료를 수집, 분석 및 저장하여 실시간으로 Host Computer에 전송하고 필요할 경우 메인 컴퓨터의 원격제어로 각 측정기의 운전상태 및 교정기능 등을 수행하는 전송 제어 시스템 입니다.

[FEP (Front End Processor)]
2개 이상 Multi Stack의 Data를 각 Data Logger와 Host Computer 사이에 설치하며 송,수신 회선을 하나로 통합하여 Data를 송, 수신 할 수 있도록 하는 전송제어 시스템입니다.`,
    content_en: `[Data Logger]
It is a transmission control system that collects, analyzes, and stores data measured by the measuring instrument, transmits it to the Host Computer in real time, and performs the operating state and calibration function of each measuring instrument by remote control of the main computer if necessary.

[FEP (Front End Processor)]
It is a transmission control system that installs data of two or more Multi Stacks between each Data Logger and Host Computer and integrates the transmission and reception lines into one to transmit and receive data.`,
    images: []
  },
  {
    title: 'Sample Conditioning System',
    content_kr: `Analyzer가 안정적으로 측정 할 수 있도록 Sample Filtration, Moisture removal, Sample Pump, 
    Temperature Control, Sample Flow Control등을 제공하는 System입니다.
  - Moisture Removal Unit
  - Sample Pump
  - Sample Cooler (Electric Cooler)
  - Gas Dryers
  - Solenoid Valve
  - Moisture Detector
  - Flowmeter
  - ETC.`,
    content_en: `It is a system that provides Sample Filtration, Moisture removal, Sample Pump, Temperature Control, Sample Flow Control, etc. so that the Analyzer can measure stably.
  - Moisture Removal Unit
  - Sample Pump
  - Sample Cooler (Electric Cooler)
  - Gas Dryers
  - Solenoid Valve
  - Moisture Detector
  - Flowmeter
  - ETC.`,
    images: ['/assets/img/sieea/business/SampleConditioningSystem.png']
  }
]

const activeMenuItem = ref(menuItems[0])

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

.sub-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
}

.sub-menu-button {
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sub-menu-button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.sub-menu-button.active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.content-area {
  margin-top: 20px;
}

.card-header-image {
  padding: 15px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Adjust as needed */
  overflow: hidden;
}

.image-item img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: contain; /* Changed from cover to contain to show full image */
}
</style>
