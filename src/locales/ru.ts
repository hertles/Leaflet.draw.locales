import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Отменить рисование",
    text: "Отмена",
  },
  finish: {
    title: "Завершить рисование",
    text: "Завершить",
  },
  undo: {
    title: "Удалить последнюю нарисованную точку",
    text: "Удалить последнюю точку",
  },
  buttons: {
    polyline: "Добавить маршрут",
    polygon: "Нарисовать полигон",
    rectangle: "Создать новую карту маршрута",
    circle: "Нарисовать круг",
    marker: "Добавить точку на карту",
    circlemarker: "Нарисовать точку(в виде круга)",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Кликните и перетащите для того, чтобы нарисовать круг.",
    },
    radius: "Радиус",
  },
  circlemarker: {
    tooltip: {
      start: "Кликните на карту для установки точки.",
    },
  },
  marker: {
    tooltip: {
      start: "Кликните на карту для установки точки.",
    },
  },
  polygon: {
    tooltip: {
      start: "Кликните, чтобы начать рисовать контур.",
      cont: "Кликните, чтобы завершить рисовать контур.",
      end: "Кликните на первую точку, чтобы завершить рисование контура.",
    },
  },
  polyline: {
    error: "<strong>Ошибка:</strong> линия не может самопересекаться!",
    tooltip: {
      start: "Кликните, чтобы начать рисовать линию.",
      cont: "Кликните, чтобы завершить рисование линии.",
      end: "Кликните на последнюю точку, чтобы завершить создание маршрута.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Кликните и перетащите, чтобы нарисовать прямоугольник, ограничивающий новую карту.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Отпустите кнопку мыши для завершения рисования.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Сохранить изменения.",
      text: "Сохранить",
    },
    cancel: {
      title: "Отменить редактирование, откатить все изменения.",
      text: "Отмена",
    },
    clearAll: {
      title: "Очистить все редактируемые слои.",
      text: "Очистить всё",
    },
  },
  buttons: {
    edit: "Редактировать.",
    editDisabled: "Нет слоёв для редактирования.",
    remove: "Удалить.",
    removeDisabled: "Нет слоёв для удаления.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Перетащите вершины или точки для редактирования фигуры.",
      subtext: 'Нажмите "Отмена", чтобы откатить изменения.',
    },
  },
  remove: {
    tooltip: {
      text: "Кликните на фигуру для удаления",
    },
  },
};

export default {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers,
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers,
  },
};
