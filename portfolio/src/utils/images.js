const images = import.meta.glob('../img/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export default images;
