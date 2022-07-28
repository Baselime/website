<template>
  <div id="terms">
    <section id="heading">
      <h1>Baselime Terms of Service</h1>
      <p class="sub-header">Effective date: January 23, 2022</p>
      <p>
        Please read these Terms of Service (Terms) carefully before using
        Baselime Websites and Services.
      </p>
      <p>
        Baselime (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates
        the <a href="/">https://baselime.io</a> website (the
        &quot;Service&quot;).
      </p>
    </section>

    <section>
      <h2>Terms</h2>
      <p>
        By accessing the website at
        <a href="https://baselime.io">https://baselime.io</a>, you are agreeing
        to be bound by these terms of service, all applicable laws and
        regulations, and agree that you are responsible for compliance with any
        applicable local laws. If you do not agree with any of these terms, you
        are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and
        trademark law. Upon electronic acceptance of these Terms, you are bound
        by these Terms and these Terms form an agreement between us and you
        (Agreement).
      </p>
    </section>

    <section>
      <h2>Modification</h2>
      <p>
        We reserve the right to modify these Terms at any time in accordance
        with this provision. If we modify these Terms, we will post the revised
        Terms on the Baselime's website and update the “Effective date” at the
        top of these Terms.
      </p>
      <p>
        We will also provide you with notice of the modifications by email and
        inform you of your right to terminate the Agreement in the notification
        email. If you do not terminate the Agreement after the revised Terms
        have been posted on the Baselime's website and you continue to access
        and use the Baselime Services, such continued access or use will
        constitute acceptance of the revised Terms.
      </p>
    </section>

    <section>
      <h2>Eligibility</h2>
      <p>
        By accessing the Baselime Services you represent and warrant that you are
        18 years or older.
      </p>
    </section>

    <section>
      <h2>Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Baselime's website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:
      </p>

      <p>
        <ol>
          <li>
            - use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
          </li>
          <li>
            - modify or copy the materials;
          </li>
          <li>
            - attempt to decompile or reverse engineer any software contained on Baselime's website; 
          </li>
          <li>
            - remove any copyright or other proprietary notations from the materials; or 
          </li>
          <li>
            - transfer the materials to another person or "mirror" the materials on any other server. 
          </li>
        </ol>
      </p>

      <p>
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by Baselime at any time. Upon
        terminating your viewing of these materials or upon the termination of
        this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
      </p>
    </section>

    <section>
      <h2>Disclaimer</h2>
      <p>
        The materials on Baselime's website are provided on an 'as is' basis.
        Baselime makes no warranties, expressed or implied, and hereby disclaims
        and negates all other warranties including, without limitation, implied
        warranties or conditions of merchantability, fitness for a particular
        purpose, or non-infringement of intellectual property or other violation
        of rights.
      </p>
      <p>
        Further, Baselime does not warrant or make any representations concerning
        the accuracy, likely results, or reliability of the use of the materials
        on its website or otherwise relating to such materials or on any sites
        linked to this site.
      </p>
    </section>

    <section>
      <h2>Limitations</h2>
      <p>
        In no event shall Baselime or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on Baselime's website, even if Baselime or a Baselime authorized
        representative has been notified orally or in writing of the possibility
        of such damage. Because some jurisdictions do not allow limitations on
        implied warranties, or limitations of liability for consequential or
        incidental damages, these limitations may not apply to you.
      </p>
    </section>

    <section>
      <h2>Accuracy of materials</h2>
      <p>
        The materials appearing on Baselime's website could include technical,
        typographical, or photographic errors. Baselime does not warrant that any
        of the materials on its website are accurate, complete or current.
        Baselime may make changes to the materials contained on its website at any
        time without notice. However Baselime does not make any commitment to
        update the materials.
      </p>
    </section>

    <section>
      <h2>Links to other sites</h2>
      <p>
        Baselime has not reviewed all of the sites linked to its website and is
        not responsible for the contents of any such linked site. The inclusion
        of any link does not imply endorsement by Baselime of the site. Use of any
        such linked website is at the user's own risk.
      </p>
    </section>

    <section>
      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. You
        irrevocably submit to the exclusive jurisdiction of the courts in that
        State or location.
      </p>
      <p>
        The Baselime Services may be accessed outside of the United Kingdom. We
        make no representation that the Baselime Services comply with the laws
        (including intellectual property laws) of any country outside the United
        Kingdom. If you access the Baselime Services from outside the United
        Kingdom, you do so at your own risk and you are responsible for
        complying with the laws in the place where you access the Baselime
        Services.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getSiteMetadata from '~/utils/getSiteMetadata'

export default Vue.extend({
  components: {},
  data() {
    return {}
  },
  head() {
    const metaData = {
      title: `Baselime - Terms of Service`,
      description: `Terms of Service Baselime`,
      url: `https://baselime.io/terms/`,
    }
    const meta = getSiteMetadata(metaData)
    return {
      title: metaData.title,
      meta: [...meta],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

#terms {
  margin-top: 180px;
  section {
    max-width: 1212px;
    margin: 0 auto;
    padding: 15px 60px;
    @media screen and (max-width: 550px) {
      padding: 5px 15px;
    }
  }

  h1 {
    text-align: center;
  }
  h2 {
    margin: 30px 0;
  }
  h3 {
    margin: 15px 0;
  }
  .sub-header {
    font-size: 1.2em;
    margin: 30px auto 60px auto;
    padding: 0 30px;
    text-align: center;
    @media screen and (max-width: 742px) {
      font-size: 1.3em;
      margin: 30px auto 30px auto;
    }
    @media screen and (max-width: 550px) {
      font-size: 1.1em;
    }
  }
}
</style>