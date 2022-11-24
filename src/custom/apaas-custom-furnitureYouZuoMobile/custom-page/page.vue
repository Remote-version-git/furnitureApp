<template>
  <div class="furnitureYouZuoMobile">
    <progressAppEdit />
  </div>
</template>

<script>
import progressAppEdit from '../custom-component/form-component/form-widget/edit/progressAppEdit.vue'
export default {
  name: 'ApaasCustomFurnitureYouZuoMobile',
  components: {
    progressAppEdit
  },
  data: function () {
    return {
      title: '这里是自开发界面'
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
