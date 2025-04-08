<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 51 48" 
      fill="none"
    >
      <mask id="mask0_1793_47" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="48">
        <path d="M51 0H0V47.1247H51V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_1793_47)">
        <path d="M18.0485 46.3265L37.2556 3.00796C38.0116 1.12845 36.3493 0.032222 34.4741 0.0322266H22.4246C20.942 0.106522 19.8889 0.811261 19.2442 2.11521L0.125027 45.2368C-0.574252 46.8393 1.85503 47.9389 2.58342 46.3265L21.7881 3.00402H26.5793L7.85741 45.2364C7.4635 46.1254 8.11427 47.1256 9.08648 47.1256C9.61833 47.1256 10.1002 46.8124 10.3158 46.3265L29.5275 3.00372H34.3196L15.5904 45.2364C14.8848 46.8527 17.3274 47.9274 18.0485 46.3261V46.3265Z" :fill="fill"/>
        <path d="M42.4422 47.1087C43.8954 47.0458 44.9657 46.3679 45.6329 45.0418C45.8863 44.3675 51.0623 33.0442 50.9645 32.7167C51.1978 31.4422 50.2027 30.2719 48.9067 30.2734L27.3833 30.2986L26.1964 32.9872L47.7236 32.9605L45.7861 37.3436L24.2614 37.37L23.0721 40.0642L44.5943 40.0408L42.6576 44.4229L21.1377 44.4463L19.9565 47.1214L42.4422 47.1087Z" :fill="fill"/>
      </g>
    </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 51
  },
  height: {
    type: [String, Number],
    default: 48
  },
  className: {
    type: String,
    default: ''
  },
  fill: {
    type: String,
    default: '#0AF29D'
  }
})
</script>