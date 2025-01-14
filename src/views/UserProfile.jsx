import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShareAlt, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';


const UserProfile = () => {
    // Przykładowe dane (w rzeczywistości pobierane z backendu)
    const user = {
      avatar: '/path/to/your/avatar.jpg', // Ścieżka do awatara użytkownika
      banner: '/path/to/your/banner.jpg', // Ścieżka do bannera użytkownika
      username: 'CodeAdiksuu',
      displayName: 'Adiksu',
      bio: 'Pasjonat sztucznej inteligencji i programowania.',
      stats: {
        createdChats: 25,
        sharedChats: 5,
        ratedAnswers: 32,
      },
      joinDate: '2024-05-15',
      preferredLanguage: 'Polski',
      favoriteChats: [
        {
          title: 'Projekt Chatbot',
          description: 'Konwersacje na temat tworzenia chatbota.',
          link: '/chat/1',
        },
        {
          title: 'AI i Przyszłość',
          description: 'Dyskusje o przyszłości sztucznej inteligencji.',
          link: '/chat/2',
        },
        {
          title: 'Nauka React.js',
          description: 'Wymiana wiedzy o React.js.',
          link: '/chat/3',
        },
      ],
        activity: [
            { type: 'shared', chatTitle: 'Projekt Chatbot', time: '2 hours ago' },
            { type: 'favorite', chatTitle: 'AI i Przyszłość', time: '1 day ago' },
            { type: 'rated', chatTitle: 'Nauka React.js', time: '3 days ago' }
        ]
    };

    return (
        <section className="user-profile">
            <div className="profile-header">
                <div
                    className="profile-banner"
                    style={{ backgroundImage: `url(${user.banner})` }}
                >
                </div>
                <div className="profile-info">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="profile-avatar"
                    />
                    <div className="profile-text">
                        <h1 className="username">{user.username}</h1>
                        <p className="bio">{user.bio}</p>
                    </div>

                </div>
            </div>

            <div className="profile-stats">
                <div className="stat-item">
                    <FontAwesomeIcon icon={faComment} />
                    <strong>{user.stats.createdChats}</strong>
                    <span>Utworzone czaty</span>
                </div>
                <div className="stat-item">
                    <FontAwesomeIcon icon={faShareAlt} />
                    <strong>{user.stats.sharedChats}</strong>
                    <span>Udostępnione czaty</span>
                </div>
                <div className="stat-item">
                    <FontAwesomeIcon icon={faStar} />
                    <strong>{user.stats.ratedAnswers}</strong>
                    <span>Ocenione odpowiedzi</span>
                </div>
                <div className="stat-item">
                   <span> Dołączył: {user.joinDate}</span>
                </div>
                  <div className="stat-item">
                   <span> Język: {user.preferredLanguage}</span>
                  </div>
                <div className="stat-item settings-link">
                    <a href="/settings">Ustawienia profilu</a>
                </div>

            </div>


            <div className="profile-section">
                <h2 className="section-title">Ulubione czaty</h2>
                <ul className="favorite-chats-list">
                    {user.favoriteChats.map((chat, index) => (
                        <li key={index} className="favorite-chat-item">
                            <a href={chat.link} className="favorite-chat-link">
                                <h3>{chat.title}</h3>
                                <p>{chat.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="profile-section">
                <h2 className="section-title">Ostatnia aktywność</h2>
                <ul className="activity-list">
                    {user.activity.map((item, index) => (
                        <li key={index} className="activity-item">
                            {item.type === 'shared' &&  <><FontAwesomeIcon icon={faShareAlt} /><span>Udostępniłeś czat '{item.chatTitle}' {item.time}</span></> }
                            {item.type === 'favorite' && <><FontAwesomeIcon icon={faHeart} /><span>Dodałeś '{item.chatTitle}' do ulubionych {item.time}</span></> }
                            {item.type === 'rated' && <><FontAwesomeIcon icon={faStar} /><span>Oceniłeś odpowiedź w czacie '{item.chatTitle}' {item.time}</span></> }
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default UserProfile;