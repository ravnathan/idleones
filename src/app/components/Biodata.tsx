"use client";

import { motion } from "framer-motion";
import { idleOnesFont } from "@/types/font";

export default function Biodata() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      variants={containerVariants}
    >
      <motion.h2
        className={`${idleOnesFont.className} text-5xl text-white text-center py-20`}
        style={{
          textShadow: "2px 2px 4px #000000, -2px -2px 4px #000000",
        }}
        variants={itemVariants}
      >
        Honorees
      </motion.h2>
      <div className="mx-5 lg:mx-32">
        <motion.h3
          className={`${idleOnesFont.className} text-2xl lg:text-4xl text-white pb-5 pl-5`}
          style={{
            textShadow: "2px 2px 4px #000000, -2px -2px 4px #000000",
          }}
          variants={itemVariants}
        >
          Vivalda: The Kayfarer of Stories and Surfaces
        </motion.h3>
        <motion.div className="bg-black/70 rounded-xl" variants={itemVariants}>
          <motion.p
            className="text-white p-2"
            style={{ textIndent: "2rem" }}
            variants={itemVariants}
          >
            Vivalda, also known as Kayfarer, was born in 1984. A lover of
            language and narrative, she cultivated a lifelong passion for
            English literature and storytelling. From a young age, she immersed
            herself in classics like Jane Eyre and Pride and Prejudice, drawn to
            the beauty of words and their power to connect. Her storytelling was
            captivating, transforming even simple anecdotes into vivid,
            emotional journeys. Equally passionate about gaming, Vivalda
            embraced video games as a modern form of storytelling. Titles like
            The Elder Scrolls and Warframe allowed her to explore immersive
            worlds that combined narrative, art, and interactivity. She often
            analyzed games with the same depth as literature, blending her love
            for both mediums.
          </motion.p>
          <motion.p
            className="text-white p-2"
            style={{ textIndent: "2rem" }}
            variants={itemVariants}
          >
            Uniquely, Vivalda had a fascination with floors. She found peace
            lying on them, wiping them clean with her bare hands, and even
            kissing them in moments of gratitude. For her, floors symbolized
            grounding, stability, and a connection to the physical world.
            Balancing the abstract and the tangible, Vivalda’s life was a
            testament to finding beauty in both grand stories and quiet,
            overlooked moments. She reminded those around her to embrace both
            their imagination and their connection to the world beneath their
            feet.
          </motion.p>
        </motion.div>

        <motion.h3
          className={`${idleOnesFont.className} text-2xl lg:text-4xl text-white pt-20 pb-5 pl-5`}
          style={{
            textShadow: "2px 2px 4px #000000, -2px -2px 4px #000000",
          }}
          variants={itemVariants}
        >
          Flames: The Big L and Rival of the Floors
        </motion.h3>
        <motion.div className="bg-black/70 rounded-xl" variants={itemVariants}>
          <motion.p
            className="text-white p-2"
            style={{ textIndent: "2rem" }}
            variants={itemVariants}
          >
            Flames, also known as The Big L, was born in 1976. Much like his
            rival, Vivalda (Kayfarer), Flames had an intense passion for floors.
            But where Vivalda sought peace and connection in her floor rituals,
            Flames viewed floors as a battleground—each surface a platform on
            which to assert dominance and mastery. His obsession with floors was
            not rooted in calmness, but in competition, fueling a rivalry that
            would define much of his life.
          </motion.p>
          <motion.p
            className="text-white p-2"
            style={{ textIndent: "2rem" }}
            variants={itemVariants}
          >
            Flames was an unconventional figure, exuding confidence and a sense
            of purpose wherever he went. While Vivalda embraced floors as a
            place of solace, he treated them as a challenge. His daily routine
            included meticulous assessments of different floor types, comparing
            their strength, texture, and durability. His drive to conquer the
            space beneath his feet pushed him into a lifelong pursuit of floor
            perfection, always seeking the best material, the cleanest surface,
            and the most rewarding sensation underfoot.
          </motion.p>
          <motion.p
            className="text-white p-2"
            style={{ textIndent: "2rem" }}
            variants={itemVariants}
          >
            This intense competition between Flames and Vivalda became
            legendary. Where she found spirituality, he found rivalry—an
            unspoken challenge between two forces connected by their shared
            obsession but divided by their differing philosophies. For Flames,
            floors represented a battleground, not for rest, but for victory.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
