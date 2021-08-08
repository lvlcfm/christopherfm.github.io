import Layout from '../../components/layout';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import utilScriptStyles from '../../styles/utilsScreenPlay.module.css';

export default function Glassdoor() {
  return (
    <Layout home>
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
          <div className={utilScriptStyles.date}>27 July 2021</div>
          <div>
            <p>
              I joined Glassdoor’s Product Engineering team as a Software
              Engineer Intern in the summer of 2017. My project focused on
              flagging content. This meant helping the moderation team both on
              the consumer facing side of flagging content, by implementing a
              redesigned flagging experience for users, that allows them to
              easily appy the right flagging label to a piece of content.
            </p>
            <p>
              On the intake side of tickets generated from flagged content, by
              implementing the feature of allowing the moderation team to sort
              their flagged content tickets by date, helping them reach their
              72hr responsive time window.
            </p>
            <p>React JS, Hibernate, Tomcat, Struts 2, JSP</p>
            <p>Full Stack Engineer, Front-end Engineer, Back-end Engineer</p>
            <p>
              It’s a sunny day in Mill Valley -- Glassdoor headquarters. It’s
              the last day of the software engeering internship, project
              presentations are today - everyone will be there - colleagues, the
              CTO.
            </p>
          </div>
        </div>
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
              Standing at the front of the seminar room he&apos;s in the midst
              of giving apresentation for his software engineer internship.
            </p>
            <p>
              Hands animated as if he were the conductor of his own voice,
              slowly paces the front of the room as if he were delivering a TEDx
              talk.
            </p>
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
              He smiles. trying to signal that his next point was something to
              be excited about—
            </p>
            <div className={utilScriptStyles.scriptDialogueContainer}>
              <div className={utilScriptStyles.scriptDialogue}>
                <div className={utilScriptStyles.scriptActor}>FRANCO</div>
                <div>
                  On the intake side of tickets generated from flagged content,
                  by implementing the feature of allowing the moderation team to
                  sort their flagged content tickets by date, helping them reach
                  their 72hr responsive time window.
                </div>
              </div>
            </div>
            <p>FRANCO’S POV — He stops. The room is empty. It’s a dry-run.</p>
            <p>
              ANGLE ON FRANCO — he walks towards his laptop and starts making
              modifications to his presentation.
            </p>
            <p>
              He opens up his text editor with his project, multiple files are
              opened with different file extensions ranging from - React JS,
              Hibernate, Tomcat, Struts 2, JSP.
            </p>
            <p>
              With a couple of keystrokes, he slowly smiles and closes his
              laptop.
            </p>
            <div className={utilScriptStyles.scriptDialogueContainer}>
              <div className={utilScriptStyles.scriptDialogue}>
                <div className={utilScriptStyles.scriptActor}>FRANCO</div>
                <div>Alright, I&apos;m ready.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
