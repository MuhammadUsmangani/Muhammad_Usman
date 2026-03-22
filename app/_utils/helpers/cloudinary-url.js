export function cloudinaryUrl(publicId) {
  // Allow providing full URL (e.g. external images)
  if (/^https?:\/\//i.test(publicId)) {
    return publicId;
  }

  // Allow local paths starting with /
  if (publicId.startsWith('/')) {
    return publicId;
  }

  const cloud =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'Muhammad-Usman-Portfolio';

  let id = publicId;
  // remove leading slash
  if (id.startsWith('/')) id = id.slice(1);
  // if the id already starts with the cloud name, strip it so we don't duplicate
  if (id.startsWith(`${cloud}/`)) {
    id = id.slice(cloud.length + 1);
  }

  return `https://res.cloudinary.com/${cloud}/image/upload/${id}`;
}
