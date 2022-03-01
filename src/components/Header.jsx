export default function Header() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>{"Seja bem vindo ao front school"}</h1>
      <button style={styles.button}>Ir para a seção 2</button>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#f4edea",
    height: 600,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  title: { color: "#12263a" },
  button: {
    backgroundColor: "#ffd361",
    color: "#12263a",
    fontSize: "2rem",
    padding: "1rem",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
};
