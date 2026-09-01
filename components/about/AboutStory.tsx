import Reveal from "@/components/motion/Reveal";

export default function AboutStory() {
  return (
    <div className="px-6 sm:px-16 py-20 sm:py-28 max-w-2xl">
      <Reveal className="mb-16">
        <div className="text-purple text-xs tracking-widest mb-4 font-mono">
          THE JOURNEY INTO PROGRAMMING
        </div>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          My journey into programming really began in JSS3. I had a friend who
          was already interested in coding and encouraged me to give it a try.
          At the same time, my parents became some of my biggest supporters
          throughout the journey — they encouraged me, believed in what I was
          trying to do, and continued supporting me as my interest grew.
        </p>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          At school, I was introduced to Code.org through ICT, and I started
          experimenting with simple HTML. At that point, I wasn&apos;t taking
          programming extremely seriously — I was mostly just curious and
          having fun with code.
        </p>
        <p className="text-white text-lg font-semibold">
          Then I entered SS1, and something changed.
        </p>
      </Reveal>

      <Reveal className="mb-16">
        <p className="text-text-dim text-base leading-relaxed mb-4">
          My interest in programming skyrocketed. I became increasingly
          interested in websites, applications, games, and the technology
          behind them. I started teaching myself new technologies and
          languages, including CSS, JavaScript, Java, React, Next.js, and
          Python — each opening the door to a different part of development.
        </p>
        <p className="text-text-dim text-base leading-relaxed">
          My first major website was <span className="text-white">NextTalk</span>,
          a messaging platform I built while I was still figuring out what I
          could actually create. It didn&apos;t go as far as I originally
          hoped, but it became an important turning point for me. From there,
          I started experimenting with more projects — Zing Survey, Connect
          Hub, Hoom, Ultimate AI, and many others. Each project gave me
          another reason to learn.
        </p>
      </Reveal>

      <Reveal className="mb-16">
        <div className="text-purple text-xs tracking-widest mb-4 font-mono">
          FROM WRITING CODE TO SOLVING PROBLEMS
        </div>
        <p className="text-text-dim text-base leading-relaxed mb-6">
          By the time I entered SS2, my mindset started changing. I wasn&apos;t
          only interested in &ldquo;Can I build this?&rdquo; anymore. I started asking:
        </p>
        <div className="border-l-2 border-purple/40 pl-5 mb-6 flex flex-col gap-2">
          <p className="text-white text-base sm:text-lg italic">&ldquo;What problem does this solve?&rdquo;</p>
          <p className="text-white text-base sm:text-lg italic">&ldquo;Who would actually use it?&rdquo;</p>
          <p className="text-white text-base sm:text-lg italic">&ldquo;Can this become something bigger?&rdquo;</p>
        </div>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          That shift pushed me beyond the technologies I already knew. I
          explored C#, C++, PHP, SVG, Dart, Flutter, React Native, and more,
          while expanding from web development into mobile development.
        </p>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          I built my first mobile version of NextTalk partly to understand
          the fundamentals of app development. I then worked on a Qaseedah
          app for my dad, explored Ghost Z across both web and mobile, and
          began building U+, a platform focused on school technology.
        </p>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          Eventually, I started working on{" "}
          <span className="text-champagne">Attendy</span>. What began as
          another project became my most developed and ambitious project so
          far — a platform with both a web application and mobile app,
          designed around different environments including schools,
          businesses, offices, and homes.
        </p>
        <p className="text-text-dim text-base leading-relaxed">
          Along the way, I also explored projects outside my usual space —
          including Chess14, a platform designed around organizing chess
          competitions in schools and helping encourage more students to take
          an interest in chess. And that&apos;s still only part of the story —
          there are many smaller experiments, ideas, prototypes, and
          unfinished projects that aren&apos;t represented here, but each one
          played a role in getting me to where I am now.
        </p>
      </Reveal>

      <Reveal className="mb-16">
        <div className="text-purple text-xs tracking-widest mb-4 font-mono">
          WHAT I BUILD FOR
        </div>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          Today, I don&apos;t see programming as simply learning languages or
          writing lines of code. For me, it&apos;s a way of turning an idea into
          something real. Sometimes that means a website. Sometimes it&apos;s a
          mobile application. Sometimes it&apos;s an experiment that never makes
          it past the prototype stage. But every project teaches me something.
        </p>
        <p className="text-text-dim text-base leading-relaxed">
          I&apos;ve gone from experimenting with simple HTML and Code.org to
          thinking about product design, application architecture, databases,
          APIs, mobile development, user experience, deployment, and the
          problems technology can actually solve. And I&apos;m still learning —
          that&apos;s probably what I enjoy most about development: there&apos;s
          always another problem to solve, another technology to understand,
          and another idea waiting to be built.
        </p>
      </Reveal>

      <Reveal>
        <div className="text-purple text-xs tracking-widest mb-4 font-mono">
          BEHIND EVERY BUILD
        </div>
        <p className="text-text-dim text-base leading-relaxed mb-4">
          My journey hasn&apos;t been mine alone. Throughout all of this, my
          parents have been some of my biggest supporters and biggest fans.
          My siblings have also been part of that support system, encouraging
          me throughout the different stages of my journey — especially
          during the moments when a project wasn&apos;t working, an idea didn&apos;t
          go as planned, or I had to start again.
        </p>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          So while ShamzyX represents what I build, the journey behind it
          represents something bigger:{" "}
          <span className="text-purple">
            curiosity, persistence, experimentation, and the people who
            believed in me along the way.
          </span>
        </p>
      </Reveal>
    </div>
  );
}