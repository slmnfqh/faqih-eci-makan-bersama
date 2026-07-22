import { PitaDivider } from "./FloatingOrnament";

export default function SectionDivider({ width = 180 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "12px auto",
      }}
    >
      <PitaDivider width={width} />
    </div>
  );
}
