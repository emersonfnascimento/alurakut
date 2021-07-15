import { Box } from "../src/components/Box";
import { MainGrid } from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons.js'

function ProfileSidebar({ user }) {
  return (
    <Box>
      <img src={`https://github.com/${user}.png`} alt="Avatar" style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'emersonfnascimento'
  const favPeople = ['omariosouto', 'maykbrito', 'PauloLuan', 'glaucia86', 'lucasmontano', 'vmaicon']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTittle">
              Pessoas da comunidades ({favPeople.length})
            </h2>

            <ul>
              {favPeople.map((githubPersonFav) => {
                return (
                  <li key={githubPersonFav}>
                    <a href={`/users/${githubPersonFav}`}>
                      <img src={`https://github.com/${githubPersonFav}.png`} alt={`User image of ${githubPersonFav}`} />
                      <span>{githubPersonFav}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
