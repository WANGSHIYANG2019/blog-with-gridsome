<template>
  <div class="layout">
      <new-index-page>
          <template v-slot:random>
              <div class="container">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <g-link class="nav-link" to="/">Home</g-link>
                      </li>
                      <li class="nav-item">
                          <g-link class="nav-link" to="/about">About</g-link>
                      </li>
                      <!--                      <li class="nav-item">-->
                      <!--                          <g-link class="nav-link" to="/post">Sample Post</g-link>-->
                      <!--                      </li>-->
                      <li class="nav-item">
                          <g-link class="nav-link" to="/contact">Contact</g-link>
                      </li>
                  </ul>
              </div>
          </template>
          <slot/>
      </new-index-page>
  </div>
</template>

<style></style>
<script>
import NewIndexPage from "../pages/Newindex";
export default {
    components: {NewIndexPage}
}
</script>