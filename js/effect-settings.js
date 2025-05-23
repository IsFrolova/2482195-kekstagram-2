export const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  chrome: {
    name: 'chrome',
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  marvin: {
    name: 'marvin',
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  phobos: {
    name: 'phobos',
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};
