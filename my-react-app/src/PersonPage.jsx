import { useParams, useNavigate } from "react-router-dom";

const people = {
  1: {
    name: "Muna",
    photo: "/photos/person1.jpg",
    message: "You have always been my rock. Thank you for everything you do every single day. I love you more than words can say.",
    color: "#F48FB1",
  },
  2: {
    name: "Lolo",
    photo: "/photos/WhatsApp Image 2026-03-14 at 02.00.27.jpeg",
    message: "Dear Mummy, Happy Mother's Day. Thank you for all your love and I wish you happiness, joy and fulfilment this Mother's Day. May God bless you and shine his face upon you. Amen!",
    color: "#FFB74D",
  },
  3: {
    name: "Nne",
    photo: "/photos/WhatsApp Image 2026-03-15 at 09.14.59.jpeg",
    message: `Happy Mother's Day to the best mother ever.

Thank you for loving me.
Thank you for correcting me.
Thank you for training me up.
Thank you for sacrificing for me.
Thank you for all the sleepless nights you've had for me.
Thank you for caring for me.

I can't imagine my life without you.
I am shaped because of your love and care.
I pray to never take it for granted.
Thank you for being a great example of what it means to do well in life.
Thank you for being someone I aspire to be like.
I'm really happy God made you my mother.

Happy Mother's Day`,
    color: "#F8A5C2",
  },
  4: {
    name: "Esom",
    photo: "/photos/person4.jpg",
    message: "The best woman I know. Your love and strength inspire me every day. Happy Mothers' Day!",
    color: "#FF8A65",
  },
};

const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "url('/photos/Untitled%20design.png') center/cover no-repeat",
    fontFamily: "'Georgia', serif",
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    background: "rgba(255,255,255,0.92)",
    borderRadius: "12px 28px 16px 24px / 20px 14px 26px 18px",
    padding: "clamp(20px, 5vw, 40px)",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
  },
};

export default function PersonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = people[id];

  if (!person) return <div>Person not found</div>;

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Name */}
        <h2
          style={{
            fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
            fontSize: "clamp(36px, 10vw, 52px)",
            color: person.color,
            margin: "0 0 20px 0",
            fontWeight: 700,
          }}
        >
          {person.name}
        </h2>

        {/* Photo */}
        <div
          style={{
            width: "clamp(140px, 40vw, 200px)",
            height: "clamp(140px, 40vw, 200px)",
            borderRadius: "12px",
            overflow: "hidden",
            border: `3px solid ${person.color}`,
            marginBottom: "20px",
            boxShadow: `0 4px 20px ${person.color}66`,
          }}
        >
          <img
            src={person.photo}
            alt={person.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.style.background = person.color + "33";
              e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:60px">📷</div>`;
            }}
          />
        </div>

        {/* Message */}
        <div
          style={{
            background: `${person.color}22`,
            border: `2px solid ${person.color}66`,
            borderRadius: "10px 20px 10px 20px / 14px 10px 18px 10px",
            padding: "16px 20px",
            fontSize: "clamp(15px, 3.5vw, 18px)",
            lineHeight: "1.7",
            color: "#3a1a1a",
            whiteSpace: "pre-line",
          }}
        >
          {person.message}
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "24px",
            padding: "12px 28px",
            background: person.color,
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            color: "white",
            fontWeight: "700",
            fontSize: "clamp(14px, 3vw, 16px)",
            fontFamily: "'Georgia', serif",
            boxShadow: `0 4px 15px ${person.color}88`,
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ← Back
        </button>

      </div>
    </div>
  );
}
