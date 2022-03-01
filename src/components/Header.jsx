export default function Header() {
  function handleCTAClick() {
    const section3 = document.querySelector("#section-3");

    if (section3 && section3 instanceof HTMLElement) {
      window.scrollTo({
        top: section3.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>{"Seja bem vindo ao front school"}</h1>
      <button style={styles.button} onClick={handleCTAClick}>
        Ir para a seção 2
      </button>
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
