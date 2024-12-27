export default function SideBar({ handleClick }) {
    return (
      <div className="sidebar">
        <h1>CV</h1>
  
        <button onClick={handleClick}>
          <i className="fas fa-envelope"></i> Contact
        </button>
        <button onClick={handleClick}>
          <i className="fas fa-graduation-cap"></i> Education
        </button>
        <button onClick={handleClick}>
          <i className="fas fa-briefcase"></i> Experience
        </button>
        <button onClick={handleClick}>
          <i className="fas fa-trophy"></i> Awards
        </button>
        <button onClick={handleClick}>
          <i className="fas fa-eye"></i> Preview
        </button>
      </div>
    );
  }
  