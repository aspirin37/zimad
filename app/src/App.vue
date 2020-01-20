<template>
  <div
    id="app"
    class="container py-4"
  >
    <div class="row mb-5">
      <div class="col-4 d-flex flex-column">
        <h6>Конфиг:</h6>
        <input
          ref="file"
          type="file"
          class="d-none"
          @change="readConfig"
        />
        <button
          class="btn btn-secondary"
          @click="selectFile"
        >
          Выбрать файл
        </button>
      </div>
      <div class="col-3">
        <h6>Выберите действие:</h6>
        <select
          v-model="actionSelected"
          class="form-control"
        >
          <template v-for="(action, key) in config">
            <option
              v-if="action.isShown"
              :key="action.label"
              :value="key"
            >
              {{ action.label }}
            </option>
          </template>
        </select>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-4">
        <input
          v-model.number="leftNumber"
          class="form-control"
          type="number"
        />
      </div>
      <div class="col-4">
        <input
          v-model.number="rightNumber"
          class="form-control"
          type="number"
        />
      </div>
      <div class="col-4">
        <button
          class="btn btn-primary mr-4"
          @click="execute"
        >
          Выполнить
        </button>
        <b>Результат:</b> {{ result }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    leftNumber: '',
    rightNumber: '',
    actionSelected: 'sum',
    result: '',
    externalConfig: {},
  }),
  computed: {
    config: vm => ({
      sum: {
        label: 'Сложение',
        isShown: true,
        action(a, b) {
          return a + b;
        },
      },
      ...vm.externalConfig,
    }),
  },
  methods: {
    execute() {
      if (this.leftNumber !== '' && this.rightNumber !== '') {
        this.result = this.config[this.actionSelected].action(this.leftNumber, this.rightNumber);
        return;
      }
      this.result = '';
    },
    selectFile() {
      this.$refs.file.click();
    },
    readConfig(evt) {
      const file = evt.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        window.eval(e.target.result);

        this.actionSelected = 'sum';
        this.leftNumber = '';
        this.rightNumber = '';

        this.externalConfig = externalConfig;
        this.$refs.file.value = '';

        alert('Конфигурация изменена. Для повторного изменения отредактируйте файл и выберите его еще раз.');
      };
      reader.readAsText(file);
    },
  },
};
</script>
