var externalConfig = {
  sum: {
    label: 'Сложение',
    isShown: true,
    action(a, b) {
      return a + b;
    },
  },
  subtract: {
    label: 'Вычитание',
    isShown: true,
    action(a, b) {
      return a - b;
    },
  },
  multiply: {
    label: 'Умножение',
    isShown: true,
    action(a, b) {
      if (a === 0 || b === 0) {
        alert('Умножение на ноль всегда дает ноль');
      }
      return a * b;
    },
  },
  divide: {
    label: 'Деление',
    isShown: true,
    action(a, b) {
      if (b === 0) {
        alert('Нельзя делить на ноль');
        return;
      }
      return a / b;
    },
  },
};
