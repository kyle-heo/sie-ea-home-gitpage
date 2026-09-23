<template>
  <footer class="footer footer-big">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-2 col-sm-3 col-6 ml-auto mr-auto">
          <img class="footer-logo" :src="$asset('assets/img/sieea/sie-logo-new.png')" alt="SIE-EA Logo" />
        </div>
        <div class="col-md-9 ml-auto mr-auto col-sm-9 col-12">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-6">
              <div class="links">
                <ul class="uppercase-links stacked-links">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/business/process-analyzer">BUSINESS</router-link></li>
                  <li><router-link to="/products/analyzer">PRODUCTS</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-md-5 col-sm-9 col-6">
              <div class="links">
                <ul class="uppercase-links stacked-links">
                  <li>(주)SIE</li>
                  <li>대표자 : Jace HEO</li>
                  <li>경기 화성시 동탄기흥로 594-7 루체스타비즈 411호</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <div class="links">
                <ul class="uppercase-links stacked-links">
                  <li>T. (+82) 31 8055 8664</li>
                  <li>F. (+82) 31 8077 2038</li>
                  <li>E. sie@sie-ea.com</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright">
            <div class="pull-right">© {{ new Date().getFullYear() }} SIE-EA. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-black { background-color: #2c2c2c; color: #ffffff; }
.footer-big { padding: 20px 0; }
.footer-logo { max-width: 115px; margin-bottom: 20px; }
.links { margin-bottom: 20px; }
.uppercase-links { list-style: none; padding-left: 0; }
.uppercase-links li { margin-bottom: 10px; }
.uppercase-links a { color: #ffffff; text-decoration: none; font-weight: 600; }
.uppercase-links a:hover { color: #a9a9a9; }
.stacked-links li { font-size: 14px; }
.copyright { font-size: 14px; margin-top: 20px; }
.pull-right { float: right; }
hr { border-color: #444444; }
</style>
