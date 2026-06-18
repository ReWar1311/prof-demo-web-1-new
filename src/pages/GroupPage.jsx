import PageHero from "../components/PageHero";
import { GROUP } from "../data/content";

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-avatar">
        {member.photo
          ? <img src={member.photo} alt={member.name} />
          : getInitials(member.name)}
      </div>
      <div>
        <div className="member-name">
          {member.salutation ? `${member.salutation} ` : ""}{member.name}
        </div>
        <div className="member-role">{member.role}</div>
        {member.interests && (
          <div className="member-interests">{member.interests}</div>
        )}
      </div>
    </div>
  );
}

export default function GroupPage() {
  const { members, introText, photo } = GROUP;

  return (
    <>
      <PageHero
        eyebrow="CQuInf · IIT Delhi"
        title="Our Group"
        subtitle={introText}
      />

      <section className="section group-section">
        <div className="container">

          {/* Group Photo Placeholder */}
          <div className="group-photo-placeholder">
            {photo
              ? <img src={photo} alt="CQuInf Group" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
              : (
                <>
                  <div className="group-photo-icon">📷</div>
                  <div>Group Photo</div>
                  <div style={{ fontSize: "0.72rem", opacity: 0.6 }}>— Coming Soon —</div>
                </>
              )
            }
          </div>

          {/* Principal Investigator */}
          <div className="member-group">
            <div className="group-subsection-title">Principal Investigator</div>
            <div className="grid grid-2" style={{ gap: 16 }}>
              {members.pi.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>

          {/* B.Tech. Students */}
          {members.btech.length > 0 && (
            <div className="member-group">
              <div className="group-subsection-title">B.Tech. Students</div>
              <div className="grid grid-2" style={{ gap: 16 }}>
                {members.btech.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          )}

          {/* JRF */}
          {members.jrf.length > 0 && (
            <div className="member-group">
              <div className="group-subsection-title">Junior Research Fellows</div>
              <div className="grid grid-2" style={{ gap: 16 }}>
                {members.jrf.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
