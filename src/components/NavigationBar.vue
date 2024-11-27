<template>
  <nav class="navbar">
    <router-link to="/"
      ><img class="logo" src="../assets/gdg_logo.svg"
    /></router-link>
    <div class="nav-links">
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 30px;
}
.nav-links a {
  margin-left: 50px;
  font-size: large;
  font-weight: bold;
  color: #2c3e50;
}
.logo {
  height: 50px;
  width: auto;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
