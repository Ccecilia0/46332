// Generated from /Users/ceciliacalvo/ssl-antlr-calculator/ConfiguracionGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ConfiguracionGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, BOOLEANO=7, CADENA=8, 
		ID=9, NUM=10, WS=11;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "BOOLEANO", "CADENA", 
			"ID", "NUM", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'configuracion'", "'{'", "'}'", "'seccion'", "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "BOOLEANO", "CADENA", "ID", 
			"NUM", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ConfiguracionGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ConfiguracionGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000bc\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0003\u0006D\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007J\b\u0007\n\u0007\f\u0007M\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0005\bS\b\b\n\b\f\bV\t\b\u0001\t\u0004\t"+
		"Y\b\t\u000b\t\f\tZ\u0001\n\u0004\n^\b\n\u000b\n\f\n_\u0001\n\u0001\n\u0000"+
		"\u0000\u000b\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0001\u0000\u0005\u0002"+
		"\u0000\"\"\\\\\u0002\u0000AZaz\u0003\u000009AZaz\u0001\u000009\u0003\u0000"+
		"\t\n\r\r  h\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0001\u0017\u0001\u0000\u0000\u0000"+
		"\u0003%\u0001\u0000\u0000\u0000\u0005\'\u0001\u0000\u0000\u0000\u0007"+
		")\u0001\u0000\u0000\u0000\t1\u0001\u0000\u0000\u0000\u000b3\u0001\u0000"+
		"\u0000\u0000\rC\u0001\u0000\u0000\u0000\u000fE\u0001\u0000\u0000\u0000"+
		"\u0011P\u0001\u0000\u0000\u0000\u0013X\u0001\u0000\u0000\u0000\u0015]"+
		"\u0001\u0000\u0000\u0000\u0017\u0018\u0005c\u0000\u0000\u0018\u0019\u0005"+
		"o\u0000\u0000\u0019\u001a\u0005n\u0000\u0000\u001a\u001b\u0005f\u0000"+
		"\u0000\u001b\u001c\u0005i\u0000\u0000\u001c\u001d\u0005g\u0000\u0000\u001d"+
		"\u001e\u0005u\u0000\u0000\u001e\u001f\u0005r\u0000\u0000\u001f \u0005"+
		"a\u0000\u0000 !\u0005c\u0000\u0000!\"\u0005i\u0000\u0000\"#\u0005o\u0000"+
		"\u0000#$\u0005n\u0000\u0000$\u0002\u0001\u0000\u0000\u0000%&\u0005{\u0000"+
		"\u0000&\u0004\u0001\u0000\u0000\u0000\'(\u0005}\u0000\u0000(\u0006\u0001"+
		"\u0000\u0000\u0000)*\u0005s\u0000\u0000*+\u0005e\u0000\u0000+,\u0005c"+
		"\u0000\u0000,-\u0005c\u0000\u0000-.\u0005i\u0000\u0000./\u0005o\u0000"+
		"\u0000/0\u0005n\u0000\u00000\b\u0001\u0000\u0000\u000012\u0005=\u0000"+
		"\u00002\n\u0001\u0000\u0000\u000034\u0005;\u0000\u00004\f\u0001\u0000"+
		"\u0000\u000056\u0005v\u0000\u000067\u0005e\u0000\u000078\u0005r\u0000"+
		"\u000089\u0005d\u0000\u00009:\u0005a\u0000\u0000:;\u0005d\u0000\u0000"+
		";<\u0005e\u0000\u0000<=\u0005r\u0000\u0000=D\u0005o\u0000\u0000>?\u0005"+
		"f\u0000\u0000?@\u0005a\u0000\u0000@A\u0005l\u0000\u0000AB\u0005s\u0000"+
		"\u0000BD\u0005o\u0000\u0000C5\u0001\u0000\u0000\u0000C>\u0001\u0000\u0000"+
		"\u0000D\u000e\u0001\u0000\u0000\u0000EK\u0005\"\u0000\u0000FJ\b\u0000"+
		"\u0000\u0000GH\u0005\\\u0000\u0000HJ\t\u0000\u0000\u0000IF\u0001\u0000"+
		"\u0000\u0000IG\u0001\u0000\u0000\u0000JM\u0001\u0000\u0000\u0000KI\u0001"+
		"\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000LN\u0001\u0000\u0000\u0000"+
		"MK\u0001\u0000\u0000\u0000NO\u0005\"\u0000\u0000O\u0010\u0001\u0000\u0000"+
		"\u0000PT\u0007\u0001\u0000\u0000QS\u0007\u0002\u0000\u0000RQ\u0001\u0000"+
		"\u0000\u0000SV\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001"+
		"\u0000\u0000\u0000U\u0012\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000WY\u0007\u0003\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000"+
		"\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[\u0014"+
		"\u0001\u0000\u0000\u0000\\^\u0007\u0004\u0000\u0000]\\\u0001\u0000\u0000"+
		"\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000"+
		"\u0000\u0000`a\u0001\u0000\u0000\u0000ab\u0006\n\u0000\u0000b\u0016\u0001"+
		"\u0000\u0000\u0000\u0007\u0000CIKTZ_\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}