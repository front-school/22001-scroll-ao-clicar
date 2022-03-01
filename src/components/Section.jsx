export default function Section({
  backgroundColor = "#fff",
  title = "Section",
}) {
  return (
    <div style={styles.wrapper(backgroundColor)}>
      <h1 style={styles.title}>{title}</h1>
    </div>
  );
}

const styles = {
  wrapper: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    height: 400,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  title: { color: "#ffffff", textShadow: "0 3px 6px rgba(0,0,0,.3)" },
};
