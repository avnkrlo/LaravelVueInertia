<script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue';
  
  const parallaxImage = ref(null);
  
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    parallaxImage.value.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .parallax {
    position: relative;
    overflow: hidden;
    height: 100vh; /* Adjust height as needed */
  }
  
  .parallax-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/life3.jpg'); /* Replace with your image URL */
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    z-index: -1;
  }
  
  .content {
    position: relative;
    z-index: 1;
    /* Add your content styles here */
  }
</style>
  

<template>
    <div class="parallax">
      <div class="parallax-image" ref="parallaxImage"></div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>