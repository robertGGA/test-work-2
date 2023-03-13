export const toArray = (obj: any): Array<any> => {
  const map: Array<any> = []
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      map.push({id: obj[key], value: key});
    });
  }
  return map;
}
