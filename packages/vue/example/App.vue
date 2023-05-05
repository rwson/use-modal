
<template>
  <div>
    <RouterLink to="/normal">Normal Mode</RouterLink>
    <RouterLink to="/global">Global Mode</RouterLink>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
html,
body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-weight: 300;
}
</style>
