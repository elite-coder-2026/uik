const colors = {
  base: {
    white: "#ffffff",
    black: "#000000"
  },
  gray: {
    25: "#fdfdfd",
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e9eaeb",
    300: "#d5d7da",
    400: "#a4a7ae",
    500: "#717680",
    600: "#535862",
    700: "#414651",
    800: "#252b37",
    900: "#181d27",
    950: "#0a0d12"
  },
  brand: {
    25: "#fcfaff",
    50: "#f9f5ff",
    100: "#f4ebff",
    200: "#e9d7fe",
    300: "#d6bbfb",
    400: "#b692f6",
    500: "#9e77ed",
    600: "#7f56d9",
    700: "#6941c6",
    800: "#53389e",
    900: "#42307d",
    950: "#2c1c5f"
  },
  info: {
    25: "#f5faff",
    50: "#eff8ff",
    100: "#d1e9ff",
    200: "#b2ddff",
    300: "#84caff",
    400: "#53b1fd",
    500: "#2e90fa",
    600: "#1570ef",
    700: "#175cd3",
    800: "#1849a9",
    900: "#194185",
    950: "#102a56"
  },
  success: {
    25: "#f6fef9",
    50: "#ecfdf3",
    100: "#dcfae6",
    300: "#75e0a7",
    400: "#47cd89",
    500: "#17b26a",
    600: "#079455",
    700: "#067647",
    800: "#085d3a",
    900: "#074d31",
    950: "#053321"
  },
  warning: {
    25: "#fffcf5",
    50: "#fffaeb",
    100: "#fef0c7",
    200: "#fedf89",
    300: "#fec84b",
    400: "#fdb022",
    500: "#f79009",
    600: "#dc6803",
    700: "#b54708",
    800: "#93370d",
    900: "#7a2e0e",
    950: "#4e1d09"
  },
  error: {
    25: "#fffbfa",
    50: "#fef3f2",
    100: "#fee4e2",
    200: "#fecdca",
    300: "#fda29b",
    400: "#f97066",
    500: "#f04438",
    600: "#d92d20",
    700: "#b42318",
    800: "#912018",
    900: "#7a271a",
    950: "#55160c"
  }
};

const root = document.getElementById("palette");

const luminance = (hex) => {
  const c = hex.replace("#", "");
  const rgb = [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
  return (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
};

Object.entries(colors).forEach(([group, shades]) => {
  const section = document.createElement("section");
  section.className = "palette-group";

  const title = document.createElement("h2");
  title.className = "palette-title";
  title.textContent = group;
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "button-grid";

  Object.entries(shades).forEach(([step, hex]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "color-button";
    button.style.background = hex;
    button.style.color = luminance(hex) > 0.6 ? "#181d27" : "#ffffff";

    const name = document.createElement("span");
    name.className = "color-name";
    name.textContent = `${group}-${step}`;

    const value = document.createElement("span");
    value.className = "color-hex";
    value.textContent = hex;

    button.appendChild(name);
    button.appendChild(value);
    grid.appendChild(button);
  });

  section.appendChild(grid);
  root.appendChild(section);
});
