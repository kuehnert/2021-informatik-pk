import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const CoverLessons = () => {
  const [lessons, setLessons] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getLessons() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MSO_URL}${process.env.REACT_APP_USERID}`
        );
        setLessons(response.data);
      } catch (error) {
        setErrorMessage(error);
      }
    }

    getLessons();
  }, []);

  const renderLesson = lesson => {
    return (
      <tr key={lesson.id}>
        <td>{format(new Date(lesson.date), 'd.M.Y')}</td>
        <td>{lesson.period}</td>
        <td>{lesson.covered_teacher}</td>
        <td>{lesson.teacher}</td>
        <td>{lesson.comment}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1>Vertretungsplan</h1>

      {!process.env.REACT_APP_USERID && (
        <p>
          Erstellen Sie eine Kopie von <pre>.env.sample</pre> namens{' '}
          <pre>.env</pre> und ersetzen Sie die UserID durch Ihre eigene. Um die
          zu finden, gehen Sie auf die MSO-App und klicken auf Ihrer Seite auf
          Ihren Namen. Das kopiert sie ins Clipboard.
        </p>
      )}

      {errorMessage && (
        <div>
          Fehler: <pre>{JSON.stringify(errorMessage, null, 4)}</pre>
        </div>
      )}

      {lessons && (
        <table className='coverlessonstable'>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Stunde</th>
              <th>Fällt aus</th>
              <th>Vertretung</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>{lessons.map(l => renderLesson(l))}</tbody>
        </table>
      )}
    </div>
  );
};

export default CoverLessons;
