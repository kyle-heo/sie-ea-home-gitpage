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

const pageTitle = "Closed Loop Sample System"
const pageDescription = "Process Sample의 누출과 VOC 배출을 억제하는 Closed Loop Sampling System"
const tabs = [
  {
    "title": "Closed Loop Sample System",
    "content": "Closed Loop Sample System은 Oil Refinery, Petrochemical, Natural Gas & LPG 산업에 적용되는 장비로, Process Line 및 Storage Tank에서 누출이 없고 VOC가 배출되지 않도록 대표 샘플을 수집하는 장비입니다.\n\nSampling System은 Process의 Sample Phase에 따라 다음과 같이 구분됩니다.\n- Liquid Sampler (Clear Bottle or Container Configuration)\n- Gas Sampler (Cylinder Configuration)\n- Liquified Gas Sampler (Expansion Chamber Configuration)\n\n주변 환경 및 고객 요구사항에 따라 특수 기능에 맞게 Customized 제작이 가능합니다.\n\nBenefits & Features\n- Safer for the Operator\n- Safer for the Environment\n- Safer for the Sample\n- Easy Operation\n- Low Maintenance\n- Eliminate Spills\n- Customizability\n- Economic\n- Low Cost\n\nApplication\n- Oil refineries\n- Petrochemicals\n- Chemicals\n- Natural gas\n- LPG\n- Biomass gasification\n- Pharma and biotechnology",
    "images": []
  },
  {
    "title": "Gas Sampler",
    "content": "Closed Loop Gas Sampler는 Sample Phase가 Gas인 경우 대표 샘플을 수집하기 위한 Sampling System입니다.\n\nCylinder Type으로 대표 샘플을 수집하며 Cylinder 양쪽은 Needle Valve 및 Self Sealing Quick Connector로 구성되어 빠른 연결/해제와 운반이 가능하고, 실린더 해제 시 누출을 방지합니다.\n\nProcess Sample Condition 및 주변 환경 조건에 따라 다양한 Application으로 설계 및 Customized 공급이 가능합니다.\n\nGas Sampler Configuration\n- Enclosure: Insulated Enclosure or Heated Enclosure / SS304 or SS316 Plate Type\n- Mounting Type: Self Standing Mount (2\" Pipe Mounting)\n- Tube Fitting Materials: SS316, SS316L, SS316 NACE, Duplex, Monel (Alloy 400), Inconel, Hastelloy C276\n- Sampling Valve: PTFE or PFA Seat, Working Pressure 1500 psig (103 bar), -54℃ ~ 150℃\n- Flexible Hoses: SS316L, Working Pressure 3600 psig (248 bar), -200℃ ~ 454℃\n- Sample Cylinder: SS304, SS316L, Monel (Alloy 400), SulfiNert Treated Cylinder / 300ml, 500ml, 1000ml\n- Connections: Screw Type, Tube Fitting Type, Flange Type\n- Options: Sample Cooler, Pressure Regulator, Sample Filter, Flow Meter, Sample Pump, Heated Enclosure",
    "images": []
  },
  {
    "title": "Liquid Sampler",
    "content": "Closed Loop Liquid Sampler는 증기압이 낮은 Process Liquid Sample에 적용하여 대표 샘플을 수집하기 위한 Sampling System입니다.\n\nNeedle Assembly와 Clear Bottle 또는 Container를 이용하여 샘플을 안전하게 수집하며, Clear Bottle/Container는 Septum Cap으로 밀폐되어 Sample 수집 시 Leak 및 Spill을 방지합니다.\n\nNeedle Assembly는 유체 점도 및 Slurries 조건에 따라 다양한 Needle Size를 선택할 수 있습니다.\n\nProcess Condition 및 주변 환경에 따라 Direct Mounting Type, Plate Type, Box Type으로 구성할 수 있으며, Direct Mounting Type은 Process Pipe Line에 직접 설치됩니다.\n\n일반적인 Sample Probe 삽입 위치는 Process Pipe Line Size의 30~50% 지점이며, 이물질 및 현장 조건에 따라 Probe 길이를 조절하여 적용합니다.\n\nProcess Sample Condition 및 주변 환경 조건에 따라 다양한 Application으로 설계 및 Customized 공급이 가능합니다.",
    "images": [
      "/assets/img/sieea/business/SampleProbe2.png",
      "/assets/img/sieea/business/SampleProbe3.png"
    ]
  },
  {
    "title": "Accessories",
    "content": "Sample Cylinder\n- Type: Standard, Outage Tube Type\n- Cylinder Volume: 150, 300, 500, 1000㎤, Others\n- Cylinder Materials: SS304L, SS316L, Monel (Alloy 400)\n- Pressure Rating: up to 5000 psig\n- Connection Ports: Inlet / Outlet ¼\", ½\" NPT\n- Internal Surface: SulfiNert Treated, EP (Electropolished), PTFE Coated\n- Regulation: TPED Approval, DOT 3A/3E/4B\n\nSample Bottle & Bottle Holder\n- Bottle Holder: Support Jack, SS304 or SS316\n- Bottle Volume: 250 ml, 500 ml, 1000 ml with Cap & Septum\n- Bottle Materials: Borosilicate Glass, Clear Glass, Amber, PFA\n- Bottle Thread: GL45 Screw Thread\n\nCap & Septum\n- Cap Materials: PP (Polypropylene)\n- Cap Size: GL45 Screw Thread\n- Septum Materials: Natural Rubber, Silicone Rubber, EPDM, Viton, Others\n- Septum Thickness: 1 ~ 3 mm\n\n상기 사양은 Basic Specification이며 기타 사양은 요청에 따라 적용 가능합니다.",
    "images": []
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
