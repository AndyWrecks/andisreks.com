<template>
  <v-container class="flex flex-col justify-center h-full space-y-4">
    <h1>
      {{ introValue
      }}<span v-if="introTypeStatus" class="blinking-cursor">|</span>
    </h1>
    <h2 class="min-h-[140px] md:min-h-[70px] md:w-1/2">
      {{ descValue }}
      <span v-if="descriptionTypeStatus" class="blinking-cursor">|</span>
    </h2>
    <div
      class="flex flex-row space-x-4 flex-wrap transition transition-all pt-4"
      :class="linksStatus ? 'opacity-100' : 'opacity-0'"
    >
      <v-btn variant="tonal" to="/about">About</v-btn>
      <v-btn variant="tonal" to="/resume"> Resume </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      yearsOfExperience: Math.abs(new Date(Date.now()).getUTCFullYear() - 2013),
      introText: "Hi, I'm Andis.",
      introValue: "",
      descValue: "",
      linksStatus: false,
      introTypeStatus: true,
      descriptionTypeStatus: false,
      typingSpeed: 80,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.introTypeStatus === true) {
        this.introValue += this.introText.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);

        if (this.charIndex === this.introText.length) {
          setTimeout(() => {
            this.typingSpeed = 30;
            this.charIndex = 0;
            this.introTypeStatus = false;
            this.descriptionTypeStatus = true;
          }, 1500);
        }
      }

      if (this.descriptionTypeStatus === true) {
        this.descValue += this.descText.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);

        if (this.charIndex === this.descText.length) {
          setTimeout(() => {
            this.descriptionTypeStatus = false;
            this.linksStatus = true;
          }, 1000);
        }
      }
    },
  },
  computed: {
    descText() {
      return `A Rhode Island based Front-End Engineer with ${this.yearsOfExperience} years' experience building websites and applications.`;
    },
  },
  created() {
    setTimeout(this.typeText, 1500);
  },
};
</script>

<style scoped>
.blinking-cursor {
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>
