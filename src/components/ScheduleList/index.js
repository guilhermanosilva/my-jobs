import { useContext, useEffect, useState } from 'react';
import { ScheduleContext } from '../../providers/ScheduleProvider';
import formatDateToSchedule from '../../utils/formateDateToSchedule';
import getScheduleStatus from '../../utils/getScheduleStatus';

import {
  Container, ContainerCategoryIcons, CategoryIcon, ContainerSchedule,
} from './styles';

function ScheduleList() {
  const [scheduleWithStatus, setScheduleWithStatus] = useState([]);
  const { userSchedules } = useContext(ScheduleContext);

  function handleFormatSchedule(schedule) {
    const scheduleFormatted = formatDateToSchedule({
      date: schedule.date,
      hour: schedule.hour,
      minute: schedule.minute,
    });

    return scheduleFormatted;
  }

  useEffect(() => {
    setScheduleWithStatus(
      userSchedules.map((schedule) => (
        {
          id: schedule.id,
          status: getScheduleStatus(schedule.date),
          schedule: handleFormatSchedule(schedule),
        }
      )),
    );
  }, [userSchedules]);

  return (
    <Container>
      <ContainerCategoryIcons>
        <CategoryIcon className="future" />
        <CategoryIcon className="started" />
        <CategoryIcon className="near" />
      </ContainerCategoryIcons>

      <ContainerSchedule>
        <ul>
          {scheduleWithStatus.length > 0
            && scheduleWithStatus.map((item) => (
              <li key={Math.random()}>
                <CategoryIcon className={item.status} />
                {item.schedule}
              </li>
            ))}
        </ul>
      </ContainerSchedule>
    </Container>
  );
}

export default ScheduleList;
