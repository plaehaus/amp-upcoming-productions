function formatRange(a, z, itemPrefix) {
  itemPrefix = itemPrefix || '';
  if (a) {
    if (z) {
      return `${itemPrefix}${a} - ${itemPrefix}${z}`;
    } else {
      return `${itemPrefix}${a}`;
    }
  } else {
    return '';
  }
}

export { formatRange };