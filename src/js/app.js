function showAttack({ special }) {
  const result = [];

  special.forEach((element) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = element;
    result.push({
      id, name, description, icon,
    });
  });

  return result;
}

export default showAttack;
