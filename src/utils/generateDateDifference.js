function generateDateDifference(createdDate) {
  const now = new Date();
  const past = new Date(createdDate);
  const diff = Math.abs(now.getTime() - past.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return (diffDays / 365).toFixed(1);
}

export default generateDateDifference;
