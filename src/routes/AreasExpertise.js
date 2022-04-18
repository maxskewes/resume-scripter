import { useState } from 'react';
import AddedExperiences from '../components/AddedExperiences';
import { ReactSortable } from 'react-sortablejs';
import { Container } from '@mui/material';

const AreasExpertise = () => {
  const [sort, setSort] = useState([
    {
      companyName: 'Ainm a hAon',
      jobTitle: 'Post Togha',
      startMonth: 'Eanair',
      startYear: 'Míla is Fiche',
    },
    {
      companyName: 'Ainm a Dó',
      jobTitle: 'Post Ufasach',
      startMonth: 'Feabhra',
      startYear: 'Dhá Míla is Deich',
    },
    {
      companyName: 'Ainm a Trí',
      jobTitle: 'Post Olc',
      startMonth: 'Lúnasa',
      startYear: 'Míla is Caoga',
    },
    {
      companyName: 'Ainm a Ceathair',
      jobTitle: 'Post álainn',
      startMonth: 'Mí na Nollaig',
      startYear: 'Trí Míla is Céad',
    },
    {
      companyName: 'Deoch',
      jobTitle: 'Fócáil',
      startMonth: 'Mí na Arse',
      startYear: 'Trí Míla is Thóin',
    },
  ]);
  return (
    <Container>
      <ReactSortable list={sort} setList={setSort}>
        {sort.map((wx, index) => {
          return (
            <div key={index}>
              <AddedExperiences
                isIndustry
                heading={wx.companyName}
                blackText={wx.jobTitle}
                greyText={wx.startMonth}
              />
            </div>
          );
        })}
      </ReactSortable>
    </Container>
  );
};

export default AreasExpertise;
