// src/components/UI/Leaderboard.js
import React, { useState } from 'react';

export default function Leaderboard() {
    const [scores, setScores] = useState([
        { id: 1, name: 'Alex', score: 2450, avatar: '/assets/ui/avatar1.png' },
        { id: 2, name: 'Taylor', score: 2310, avatar: '/assets/ui/avatar2.png' }
    ]);

    return (
        <div className="leaderboard">
            <h3>Top Performers</h3>
            <ol>
                {scores.map(user => (
                    <li key={user.id}>
                        <img src={user.avatar} alt={user.name} width="40" />
                        <span>{user.name}</span>
                        <span className="score">{user.score}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}