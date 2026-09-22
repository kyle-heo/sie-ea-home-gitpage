<template>
  <PageHeader
    title="Process Analyzer System"
    description="공정 분석 시스템을 통한 정밀한 분석과 모니터링 솔루션을 제공합니다."
  />
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Process Analyzer System</h2>
          <p class="section-description">
            공정 분석 시스템을 통한 정밀한 분석과 모니터링 솔루션을 제공합니다.
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
    title: 'Analyzer House',
    content_kr: `Analyzer House (or Shelter)는 Oil Refinery, Petrochemical & Chemical, Iron & Steel, Power Plant 산업에 
Process Analyzer와 함께 설치되는 장비로 위험 지역 및 외부 환경으로부터 Operator의 안전한 운전환경을 
제공하고, 분석기의 측정 오류를 방지하며, 유지보수의 용이성을 위해 설치됩니다.`,
    content_en: `The Analyzer House (or Shelter) is installed with the Process Analyzer in the Oil Refinery, Petrochemical & Chemical, Iron & Steel, and Power Plant industries to provide a safe operating environment for operators from hazardous areas and external environments, prevent measurement errors of the analyzer, and facilitate maintenance.`,
    images: [
      '/assets/img/sieea/business/AnalyzerHouse1.jpg',
      '/assets/img/sieea/business/AnalyzerHouse2.jpg'
    ]
  },
  {
    title: 'Analyzer Cabinet, Local Rack, Pipe Stanchion',
    content_kr: `단일 분석기로 Sample Point 근거리에 설치 할 때 적용하며, 
공간이 협소한 장소에도 적용합니다.`,
    content_en: `It is applied when installing a single analyzer near the sample point, and it is also applied in a narrow space.`,
    images: [
      '/assets/img/sieea/business/AnalyzerCabinet.jpg',
      '/assets/img/sieea/business/LocalRack.jpg',
      '/assets/img/sieea/business/PipeStanchion.png'
    ]
  },
  {
    title: 'Sample Conditioning System, Pressure Reducing System, VPR System',
    content_kr: `Analyzer 및 Instrument가 Process Sample을 안정적으로 측정 할 수 있도록 Process sample filtration, 
Temperature Control, Pressure Control, Fast loop, Sample Flow Control, Moisture Removal, 
Multi Streams Switching등을 제공하는 System입니다.`,
    content_en: `It is a system that provides Process sample filtration, Temperature Control, Pressure Control, Fast loop, Sample Flow Control, Moisture Removal, Multi Streams Switching, etc. so that the Analyzer and Instrument can stably measure the Process Sample.`,
    images: [
      '/assets/img/sieea/business/SampleConditioningSystem1.jpg',
      '/assets/img/sieea/business/SampleConditioningSystem2.jpg',
      '/assets/img/sieea/business/SampleConditioningSystem3.jpg',
      '/assets/img/sieea/business/SampleConditioningSystem4.jpg'
    ]
  },
  {
    title: 'HVAC',
    content_kr: `HVAC 는 Analyzer House 내부의 온,습도를 조절하며, 양압 유지기능을 통하여 외부의 유해 가스 인입
방지 및 공기 순환을 통한 맑은 공기를 공급하기 위해 설치됩니다.`,
    content_en: `HVAC is installed to control the temperature and humidity inside the Analyzer House, prevent the inflow of harmful gases from the outside through the positive pressure maintenance function, and supply clean air through air circulation.`,
    images: []
  },
  {
    title: 'Gas Detection System',
    content_kr: `Analyzer House 내부에 인화성 및 유독성 가스가 유출 / 유입 되었거나 연기 및 화염이 발생하였을 때
자동으로 감지하여 음향 장치를 통한 위험경보 송출합니다. 
(필요 시 Fire Suppression System을 통한 소화 화재진압, HVAC System을 통한 내/외부 공기 차단 또는
 공급, 압력 조절 등 연계 System 을 구성할 수 있습니다.)`,
    content_en: `When flammable and toxic gases are leaked/inflowed inside the Analyzer House or smoke and flames are generated, it is automatically detected and a danger alarm is sent through an acoustic device.
(If necessary, a linked system can be configured such as fire suppression through the Fire Suppression System, internal/external air blocking or supply through the HVAC System, pressure control, etc.)`,
    images: []
  },
  {
    title: 'Sample Probe & Sample Line (Tracing Tube)',
    content_kr: `Sample Probe는 Process Line에서 시료를 채취하기 위한 장치 입니다. 
  - Tube & Drill Bar Type
  - Retractable & Fixed Type
Sample Line (Tracing Tube)은 Process Sample의 온도 유지 및 안전을 위해 설치됩니다.
  - Insulation Tube
  - Steam  Heating Tracing Tube with Temp. Control Valve or Trap
  - Electric Heating Tracing Tube with Temp Controller`,
    content_en: `The Sample Probe is a device for collecting samples from the Process Line.
  - Tube & Drill Bar Type
  - Retractable & Fixed Type
The Sample Line (Tracing Tube) is installed to maintain the temperature and safety of the Process Sample.
  - Insulation Tube
  - Steam Heating Tracing Tube with Temp. Control Valve or Trap
  - Electric Heating Tracing Tube with Temp Controller`,
    images: [
      '/assets/img/sieea/business/SampleProbe1.jpg',
      '/assets/img/sieea/business/SampleProbe2.png',
      '/assets/img/sieea/business/SampleProbe3.png',
      '/assets/img/sieea/business/SampleProbe4.png'
    ]
  },
  {
    title: 'Electrical Equipment',
    content_kr: `Hazardous Area Classification에 따라 Electrical Equipment를 적용합니다.
  - Distribution Panel (Power & Signal)
  - Junction Box (Power & Signal)
  - Lighting / Receptacle / Switch
  - Cable / Gland / ETC.`,
    content_en: `Electrical Equipment is applied according to the Hazardous Area Classification.
  - Distribution Panel (Power & Signal)
  - Junction Box (Power & Signal)
  - Lighting / Receptacle / Switch
  - Cable / Gland / ETC.`,
    images: []
  },
  {
    title: 'Liquid Sample Recovery System',
    content_kr: `온라인 분석기 및 SCS에서 사용한 Process Sample이 대기로 배출하는 것이 부적합하거나 압력저하로 인해
다시 공정라인으로 되돌리기 어려울 경우 Process Sample을 Recovery Tank에 수집하였다가 펌프를 통하여 
주기적으로 공정라인으로 재 공급하는 System입니다.`,
    content_en: `If it is inappropriate to discharge the Process Sample used in the online analyzer and SCS to the atmosphere or it is difficult to return it to the process line due to a pressure drop, it is a system that collects the Process Sample in a Recovery Tank and periodically re-supplies it to the process line through a pump.`,
    images: ['/assets/img/sieea/business/LiquidSampleRecoverySystem.png']
  },
  {
    title: 'Software & Hardware',
    content_kr: `Analyzer 및 Data Server, DCS 등 분석을 위한 각 장비와 통신하여 실시간 모니터링을 진행하며, 공정제어 및 
관리/감독을 위한 System입니다. HVAC & Fire Alarm Control System 또한 연동하여 모니터링 및 제어가 가능합니다.
  - DAS (Data Acquisition System)
  - HMI (Human Machine Interface)
  - SCADA (Supervisory Control And Data Acquisition)
  - AMDAS (Analyzer Management Data Acquisition System)`,
    content_en: `It is a system for process control and management/supervision by communicating with each equipment for analysis such as Analyzer, Data Server, DCS, etc. and proceeding with real-time monitoring. HVAC & Fire Alarm Control System can also be linked for monitoring and control.
  - DAS (Data Acquisition System)
  - HMI (Human Machine Interface)
  - SCADA (Supervisory Control And Data Acquisition)
  - AMDAS (Analyzer Management Data Acquisition System)`,
    images: ['/assets/img/sieea/business/software_hardware.png']
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
