const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return undefined;
  const toLowered = isFavourite.toLowerCase();
  if (toLowered === 'true') return true;
  if (toLowered === 'false') return false;
  return undefined;
};
const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (type) => ['home', 'personal', 'work'].includes(type);

  if (isType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;
  return {
    isFavourite: parseIsFavourite(isFavourite),
    contactType: parseType(contactType),
  };
};
