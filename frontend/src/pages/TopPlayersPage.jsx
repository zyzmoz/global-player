import Headline from '../components/Headline/Headline'
import Table from '../components/Table/Table'
import TableHeader from '../components/Table/TableHeader'
import TableItem from '../components/Table/TableItem'
import Sidebar from '../components/Sidebar/Sidebar'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card'
import Avatar from '../components/Avatar/Avatar'
import DoughnutChart from '../components/DoughnutChart/DoughnutChart'
import BodyText from '../components/BodyText/BodyText'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Button from '../components/Button/Button'

function TopPlayersPage() {
  return (
    <div className="top-players-page">
      <Sidebar />
      <SearchBar />
      <Headline text="Top Players" />
      <Card>
        <Headline text="Draven" />
        <Avatar />
        <BodyText text="Grandmaster" />
        <DoughnutChart
          winRate={{
            data: [6, 5],
          }}
        />
        <BodyText />
        <BodyText />
        <BodyText />
        <BodyText />
        <BodyText />
        <ProgressBar />
        <Button text="See more" />
      </Card>

      <Headline />
      <Table className="table-ranking">
        <TableHeader
          headers={[
            { property: 'rank', title: 'Rank' },
            { property: 'name', title: 'Name' },
            { property: 'winRate', title: 'Win Rate' },
            { property: 'kda', title: 'KDA' },
            { property: 'matches', title: 'Matches' },
            { property: 'personality', title: 'Personality' },
          ]}
        />
        {[
          {
            feautures: 'Display data',
            gpicon: 'check',
            blitzicon: 'check',
            logicon: 'check',
          },
          {
            feautures: 'Review players',
            gpicon: 'check',
            blitzicon: '',
            logicon: '',
          },
          {
            feautures: 'Compare to players',
            gpicon: 'check',
            blitzicon: '',
            logicon: '',
          },
          {
            feautures: 'Contact players',
            gpicon: 'check',
            blitzicon: '',
            logicon: '',
          },
        ].map((item) => (
          <TableItem
            item={item}
            headers={[
              { property: 'feautures', title: 'Feautures' },
              { property: 'gpicon', title: 'GP Icon' },
              { property: 'blitzicon', title: 'BLITZ Icon' },
              { property: 'logicon', title: 'LoG Icon' },
            ]}
          />
        ))}
      </Table>
    </div>
  )
}

export default TopPlayersPage
