import Layout from '../../components/layout';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import utilScriptStyles from '../../styles/utilsScreenPlay.module.css';

export default function Glassdoor() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <Image
          src="/images/work/clapperboard_glassdoor.svg"
          alt="Clapperboard"
          width={700}
          height={602}
        />
      </section>
      <section>
        <div className={utilScriptStyles.containerWork}>
          <div className={utilScriptStyles.titleContainer}>
            <div>GLASSDOOR</div>
            <div>PROJECT RED FLAG</div>
          </div>
          <div className={utilScriptStyles.credit}>Written by</div>
          <div className={utilScriptStyles.author}>
            Christopher Franco Monterrosa
          </div>
          <div className={utilScriptStyles.date}>8 August 2021</div>
          <div>
            <p>
              It’s the summer of 2017, Christopher Franco Monterrosa, is hired
              for his first Software Engineering Internship at Glassdoor.
            </p>
            <p>
              He joins Glassdoor’s Product Engineering team where his summer
              project focuses on implementing a redesigned flagging content
              experiece for users — taking it from textarea box to a form with
              purpose.
            </p>
            <p>
              On the intake side of those submissions - he implents a feature
              that helps put time in the hands of the moderation team to help
              them achieve their 72hr responce time window.
            </p>
            <p>He self-titles the summer work ahead as “Project Red Flag”.</p>
            <p>
              He’s surrounded by mentors all around, from Product Managers to
              Engineers who give him a foundation in what it takes to build a
              great company with great people.
            </p>
            <p>
              This story takes place on the last day of his internship. It
              starts on the San Francisco side of the Golden Gate Bridge. He’s a
              local, he rides this bridge everday to work from the Embarcadero.
            </p>
            <p>He’s early.</p>
            <p>
              He’s <i>tourists aren’t here</i> early.
            </p>

            <p>
              He’s <i>locals aren’t even here </i> early.
            </p>
            <p>Bike lights are ON.</p>
          </div>
        </div>
      </section>
      <section>
        <div className={utilScriptStyles.containerWork}>
          <div className={utilScriptStyles.sceneHeading}>
            HEAR ROAD BIKE DOWNSHIFTING GEARS
          </div>
          <div className={utilScriptStyles.sceneHeading}>
            EXT. SAN FRANCISCO/ GOLDEN GATE BRIDGE - EARLY MORNING
          </div>
          <div>
            <p>It’s a FOGGY day in San Francisco.</p>
            <p>
              ANGLE ON CYCLIST FROM BEHIND -- he’s wearing a bright neon green
              Specialized helmet -- he’s riding his trusty steed - a
              black/red/white 2014 Specialized Allez C2 road bike that he bought
              at Valencia Cycling in SF. He’s local.
            </p>

            <p>
              We see a timbuk2 backpack with a silver embroidered Glassdoor logo
              with a bluetooth speaker attached.
            </p>
            <p>No music is playing.</p>
            <p>
              ANGLE ON BIKE’S PHONE MOUNT -- Cyclist double taps to exit out of
              the navigation application and into a music application.
            </p>
            <p>He taps on a song. A hip hop track begins to play.</p>
            <p>It&apos;s a song suitable for a last day.</p>
            <p>
              <a href="https://open.spotify.com/track/0hFvCXdopSVd0XOUDlDzFL?si=16d71c54a79d4368">
                <strong>
                  &quot;Muchachito Problematico&quot; by El Pugilato
                </strong>
              </a>
            </p>
            <p>Bluetooth speakers are at full volume.</p>
            <div className={utilScriptStyles.sceneHeading}>
              CYCLING TO MILL VALLEY MONTAGE:
            </div>
            <p>
              ANGLE ON CYCLIST -- side shot of Golden Gate Brige. We see the
              cyclist head bobbing back and forth from far away. His peddaling
              intensifies.
            </p>
            <p>
              ANGLE ON CYCLIST -- SUN IS BEAMING. We see them pass a sign that
              says “WELCOME TO SAUSALITO”
            </p>
            <p>
              SIDE ANGLE ON CYCLIST -- he is now at the Mill Valley Sausalito
              Path, we see the ocean in the background. He continues to bob his
              head to the beat of the song. He breaks into a full sprint.
            </p>
            <div className={utilScriptStyles.sceneHeading}>
              END CYCLING TO MILL VALLEY MONTAGE
            </div>
          </div>
        </div>

        <div className={utilScriptStyles.sceneInstruction}>MUSIC STOPS:</div>
      </section>
      <section>
        <div className={utilScriptStyles.containerWork}>
          <div className={utilScriptStyles.sceneHeading}>
            INT. GLASSDOOR/ SEMINAR ROOM - MORNING
          </div>
          <div>
            <p>
              It’s a sunny day in Mill Valley -- Glassdoor headquarters. It’s
              the last day of the software engeering internship, project
              presentations are today - everyone will be there - colleagues, the
              CTO.
            </p>
            <p>
              CLOSE ON CHRISTOPHER FRANCO MONTERROSA (20&apos;s),bright eyed,
              curly wavy black hair parted to the left,with black Ray-ban
              eyeglasses keeping the curls from crashing into his eyes.
            </p>
            <p>
              He’s wearing his trusty blue pint striped blazer, with purple
              chinos, hemmed to his ankles, highlighting his sun kissed brown
              ZARA dress shoes, scuff marks that could only come from a dancer.
            </p>
            <p>
              Standing at the front of the seminar room he’s in the midst of
              giving a presentation for his software engineer internship.
            </p>
            <p>Hands animated as if he were the conductor of his own voice.</p>

            <div className={utilScriptStyles.scriptDialogueContainer}>
              <div className={utilScriptStyles.scriptDialogue}>
                <div className={utilScriptStyles.scriptActor}>FRANCO</div>
                <div>
                  My project focused on flagging content. This meant helping the
                  moderation team both on the consumer facing side of flagging
                  content, by implementing a redesigned flagging experience for
                  users, that allows them to easily appy the right flagging
                  label to a piece of content.
                </div>
              </div>
            </div>
            <p>
              He smiles. Trying to signal that his next point was something to
              be excited about—
            </p>
            <div className={utilScriptStyles.scriptDialogueContainer}>
              <div className={utilScriptStyles.scriptDialogue}>
                <div className={utilScriptStyles.scriptActor}>FRANCO</div>
                <div>
                  On the intake side of tickets generated from flagged content,
                  by implementing the feature of allowing the moderation team to
                  sort their flagged content tickets by date, this helps them
                  reach their 72hr response time window.
                </div>
              </div>
            </div>
            <p>
              FRANCO’S POV -- He stops. The room is empty. It&apos;s a dry-run.
            </p>
            <p>
              ANGLE ON FRANCO -- he walks towards his laptop and starts making
              modifications to his presentation.
            </p>
            <p>
              He opens up his text editor with his project. Multiple files are
              opened with different file extensions - React JS, Hibernate,
              Tomcat, Struts 2, JSP.
            </p>
            <p>
              With a couple of keystrokes, he slowly smiles and closes his
              laptop.
            </p>
            <div className={utilScriptStyles.scriptDialogueContainer}>
              <div className={utilScriptStyles.scriptDialogue}>
                <div className={utilScriptStyles.scriptActor}>FRANCO</div>
                <div>Alright, now I&apos;m ready.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
