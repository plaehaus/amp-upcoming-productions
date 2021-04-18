<script>
  export let fullScreen = false;
</script>

<style>
  .fullScreen {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
  }
  .loader {
    margin: 0 auto;
    width: 60px;
    height: 50px;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
  .loader > div {
    height: 100%;
    width: 8px;
    display: inline-block;
    float: left;
    margin-left: 2px;
    -webkit-animation: delay 0.8s infinite ease-in-out;
    animation: delay 0.8s infinite ease-in-out;
  }
  .loader .bar1, .loader .bar2, .loader .bar3, .loader .bar4, .loader .bar5, .loader .bar6 {
    opacity: 80%;
  }
  .loader .bar1 {
    background-color: #313b7a;
  }
  .loader .bar2 {
    background-color: #3d99be;
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  .loader .bar3 {
    background-color: #53A0E8;
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  .loader .bar4 {
    background-color: #9A57E8;
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  .loader .bar5 {
    background-color: #cb4fc2;
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  /* .loader .bar6 {
    background-color: #ed1b72;
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  } */
  @-webkit-keyframes delay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.2);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }
  @keyframes delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.2);
      -webkit-transform: scaleY(0.2);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
</style>

<div class:fullScreen>
  <div class="loader">
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
    <div class="bar4" />
    <div class="bar5" />
    <div class="bar6" />
  </div>
</div>
